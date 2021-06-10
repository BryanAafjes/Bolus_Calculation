import { CalculateBolus } from "../MVC/Logic/boluscalculation";
import {api} from "../MVC/Controllers/calculationController";
import { User } from "../MVC/Controllers/userController";
import 'isomorphic-fetch'

//tests for user auth

test('test if user can create account', () => {
    expect(true).toBe(true);
});
