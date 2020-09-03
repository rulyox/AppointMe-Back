import { User, userDAO, userUtility } from '../user';
import * as utility from '../utility';

export const postToken = (id: string, pw: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`POST /user/token | id: ${id}`);

            const resultCode: number = await userDAO.checkLogin(id, pw);

            switch(resultCode) {

                case 101:
                    const token: string = await userUtility.createJWT(id);

                    const result = {
                        token: token
                    };

                    resolve(result);
                    break;

                case 201:
                    resolve(undefined);
                    break;

                case 202:
                    resolve(undefined);
                    break;

            }

        } catch(error) { reject(error); }

    });
};

export const get = (token: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`GET /user | token: ${token}`);

            const id = await userDAO.checkToken(token);

            const result = {
                id: id
            };

            resolve(result);

        } catch(error) { reject(error); }

    });
};

export const post = (id: string, name: string, pw: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`POST /user | id: ${id}`);

            const salt = userUtility.createRandomSalt();

            pw = userUtility.hash(pw, salt);

            const user = new User(id, name, pw, salt);

            await userDAO.create(user);

            resolve(undefined);

        } catch(error) { reject(error); }

    });
};

export const getData = (id: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {

        try {

            // print log
            utility.print(`GET /user/data | id: ${id}`);

            const user: User = await userDAO.get(id);

            resolve({
                name: user.name
            });

        } catch(error) { reject(error); }

    });
};
