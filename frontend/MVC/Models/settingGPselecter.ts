import { User } from "../../js/Controllers/userController.js";
import { Roles } from "../../js/Models/roles.js";
import { fillGPList } from "../../js/Models/getNewUserInput.js";
import { api } from "../Controllers/calculationController.js";
import { cookieHelper } from "../Logic/cookieHelper.js"


const gpList: HTMLSelectElement = <HTMLSelectElement>document.getElementById("gplist");



function UpdateGPLIST() {
    (async () => {
      //const userId = cookieHelper.getCookie("id");
      const userId = cookieHelper.getCookie("id");
      const data = await User.getGps();
      Promise.resolve(data);
     
      
      let i = 0;
      data.forEach(function () {
        
        const gpoption: HTMLOptionElement = document.createElement("option");
        gpoption.text = data[i].email;
        gpList.add(gpoption);
        i++;
      });
      
    })();
  }
  UpdateGPLIST();