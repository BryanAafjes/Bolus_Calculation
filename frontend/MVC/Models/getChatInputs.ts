import { User } from "../../js/Controllers/userController.js";

import { cookieHelper } from "../Logic/cookieHelper.js";


function MessageStringConstructor(message: string)
{
  let fullMessage;

  (async () => {
      //const userId = cookieHelper.getCookie("id");
      const userId = cookieHelper.getCookie("id");
      const data = await User.GetUserInfo(userId);

      Promise.resolve(data);

      let messageSender = data.username;
      fullMessage = messageSender + ": " + message;
      s.emit('send-message', fullMessage);
    })();

}
function cookieUserDisconnected()
{
  (async () => {
    //const userId = cookieHelper.getCookie("id");
    const userId = cookieHelper.getCookie("id");
    const data = await User.GetUserInfo(userId);

    Promise.resolve(data);

    let cookieUser = data.username;
    s.emit('send-cookieuserDisconnected', cookieUser);

  })();
}
function cookieUserConnected()
{
  (async () => {
    //const userId = cookieHelper.getCookie("id");
    const userId = cookieHelper.getCookie("id");
    const data = await User.GetUserInfo(userId);

    Promise.resolve(data);

    let cookieUser = data.username;
    s.emit('send-cookieuser', cookieUser);

  })();
}

function displayUser(userName: string)
{
      //const userId = cookieHelper.getCookie("id");
      const onlineUsersList: HTMLSelectElement = <HTMLSelectElement>document.getElementById("onlineUserList");
      const onlineUser: HTMLOptionElement = document.createElement("option");
      onlineUser.text = userName;
      onlineUsersList.add(onlineUser);
}

function removeUser(userName: string)
{
      //const userId = cookieHelper.getCookie("id");
      const userList: HTMLSelectElement = <HTMLSelectElement>document.getElementById("onlineUserList");
      const searchString = userName;
      for(let i = 0; i < userList.length; i++)
      {
         if(userList.options[i].value == searchString)
         {
           userList.remove(i);
           break;
         }
      }
      //const gpoption: HTMLOptionElement = document.createElement("option");
     // gpoption.text = data.username;
      //gpList.add(gpoption);
}

function displayUserOfChatBox()
{
  let fullMessage;

  (async () => {
      //const userId = cookieHelper.getCookie("id");
      const userId = cookieHelper.getCookie("id");
      const data = await User.GetUserInfo(userId);

      Promise.resolve(data);
      document.getElementById("chatboxUserTitle").innerHTML = "Ingelogd als: " + data.username;
    })();

}
function UpdateChatMessagesList(message: string)
{
    const dateOfMessage = new Date(Date.now()).toLocaleString();
    document.getElementById("messageList").insertAdjacentHTML("beforeend", "<b>" + message + "</b>" + "<br>" + " geplaatst op: " + dateOfMessage + "<br>" + "<br>");
}

const s = io('http://localhost:8000')


    s.on('connect', () => {
      cookieUserConnected();
    })

    s.on('disconnect', () => {
      cookieUserDisconnected();
   })


    s.on('recieve-message', message => {
      UpdateChatMessagesList(message);
      console.log("message recieved: " + message);
    })

    s.on('recieve-cookieuser', cookieUser => {
      displayUser(cookieUser);
      console.log("cookieuser recieved: " + cookieUser);
    })

    s.on('recieve-cookieuserDisconnected', cookieUser => {
      removeUser(cookieUser);
      console.log("cookieuser dis recieved: " + cookieUser);
    })

window.addEventListener(
    "load",
    function () {

      const buttonChatter = document.getElementById("buttonChatMessage");

      if (buttonChatter) {
        document.getElementById("buttonChatMessage").addEventListener("click", function () {

          let chatMessageAPI;
          const chatMessage = ( < HTMLInputElement > (document.getElementById("userMessage"))).value;
          chatMessageAPI = chatMessage;
          console.log("clicked me");
          MessageStringConstructor(chatMessageAPI);
          //UpdateChatMessagesList(chatMessageAPI);
        });
      }
    },
    false
  );

  displayUserOfChatBox();