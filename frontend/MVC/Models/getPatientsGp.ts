import { User } from "../../js/Controllers/userController.js";
import {cookieHelper} from "../../js/Logic/cookieHelper.js"

export async function getPatientsList(){
    let gpId = cookieHelper.getCookie("id");
    if(gpId != null)
    {
        return await User.GetPatientsFromGp(gpId);
    }
}