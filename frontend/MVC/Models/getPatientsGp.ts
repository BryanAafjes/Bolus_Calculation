import { User } from "../../js/Controllers/userController.js";
import {cookieHelper} from "../../js/Logic/cookieHelper.js"

if(cookieHelper.getCookie("id") == null){};

export async function getPatientsList(){
    let gpId;
    if(gpId = cookieHelper.getCookie("id") != null)
    {
        return await User.GetPatientsFromGp(gpId);
    }
}