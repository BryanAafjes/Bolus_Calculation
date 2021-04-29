import * as bcrypt from 'bcryptjs';
import { resolve } from 'url';
const saltRounds = 10; // should be 10
//const myPlaintextPassword = 's0/\/\P4$$w0rD';

export class hashingHelper
{
    async hashPassword (passwordToHash: string)
    {
        const hashedPassword = await bcrypt.hash(passwordToHash, saltRounds);
        return hashedPassword;
    }

    static verifyHash(hashedPassword:string, passwordToCheck:string):boolean
    {
        return bcrypt.compareSync(passwordToCheck, hashedPassword);
    }
}
