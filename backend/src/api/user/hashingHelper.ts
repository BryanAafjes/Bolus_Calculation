// import * as bcrypt from 'bcrypt';
// const saltRounds = 10; // should be 10
// //const myPlaintextPassword = 's0/\/\P4$$w0rD';

// export class hashingHelper
// {
//     static hashPassword(passwordToHash: string):string
//     {
//         let hashedPassword:string;
//         bcrypt.genSalt(saltRounds, function (err, salt) {
//             bcrypt.hash(passwordToHash, salt, function (err, hash) {
//                 hashedPassword = hash.toString();
//             });
//         });
//         console.log(hashedPassword);
//         return hashedPassword;
//     }

//     static verifyHash(hashedPassword:string, passwordToCheck:string):boolean
//     {
//         return bcrypt.compareSync(passwordToCheck, hashedPassword);
//     }
// }
