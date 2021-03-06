import * as bcrypt from 'bcryptjs';
import { resolve } from 'url';
const saltRounds = 10; // should be 10
//const myPlaintextPassword = 's0/\/\P4$$w0rD';

export class hashingHelper
{

    async hashPassword (passwordToHash: string)
    {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(passwordToHash, saltRounds);
        return hashedPassword;
    }

    async verifyHash(hashedPassword:string, passwordToCheck:string) : Promise<boolean>
    {
        return bcrypt.compareSync(passwordToCheck, hashedPassword);
    }
}
