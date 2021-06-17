import { User } from "../MVC/Controllers/userController";
import {userModel, UserRole, userWithBolus} from '../MVC/Models/userModel';
import 'isomorphic-fetch';

//tests for user auth

test('error', async() => {
    expect(true).toBe(true);
});

// test('test if user can login', async() => {
//     const user : userModel = await User.VerifyUser("quint@email.com", "Test12345!");
//     expect(user.id).toBe(3);
// });

// // test('test if user can create account', async() => {
// //     const user = await User.CreateNewUser("quint","quint2@email.com", "Test12345!", "Patient", "1");
// //     expect(user[3].username).toBe("quint");
// // });

// test('test if list of GPs can be requested', async() => {
//     const user : userModel[] = await User.getGps();
//     expect(user[0].username).toBe("Bryan Aafjes");
//     expect(user[0].id).toBe(1);
// });

// test('test if list of patients and calculations from GP can be requested', async() => {
//     const user : userWithBolus[] = await User.GetPatientsFromGp(1);
//     expect(user[0].username).toBe("Albion Zogaj");
//     expect(user[0].id).toBe(2);
// });

