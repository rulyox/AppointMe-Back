import * as DB from '../db';
import { User, userSQL, userUtility } from '../user';

const getHashedPassword = (id: string, pw: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {

        try {

            const selectSalt = await DB.run(userSQL.selectSalt(id));

            if(selectSalt.length === 1) {

                const salt: string = selectSalt[0].salt;
                const hashedPassword: string = userUtility.hash(pw, salt);

                resolve(hashedPassword);

            } else resolve(undefined);

        } catch(error) { reject(error); }

    });
};

export const checkLogin = (id: string, pw: string): Promise<number> => {
    return new Promise(async (resolve, reject) => {

        try {

            // hash password
            const hashedPassword: string = await getHashedPassword(id, pw);

            if(hashedPassword !== undefined) {

                const selectByEmailPw = await DB.run(userSQL.selectByIdPw(id, hashedPassword));

                if(selectByEmailPw.length === 1) resolve(101);
                else resolve(202);

            } else resolve(201);

        } catch(error) { reject(error); }

    });
};

export const checkToken = (token: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {

        try {

            const decoded: any = await userUtility.verifyJWT(token);
            const id = decoded.id;

            resolve(id);

        } catch(error) { reject(error); }

    });
};

export const create = (user: User): Promise<number> => {
    return new Promise(async (resolve, reject) => {

        try {

            await DB.run(userSQL.add(
                user.id,
                user.name,
                user.pw,
                user.salt
            ));

            resolve(101);

        } catch(error) { reject(error); }

    });
};

export const get = (id: string): Promise<User> => {
    return new Promise(async (resolve, reject) => {

        try {

            const selectById = await DB.run(userSQL.selectById(id));
            const selected = selectById[0];

            const user = new User(
                selected.id,
                selected.name,
                selected.pw,
                selected.salt
            );

            resolve(user);

        } catch(error) { reject(error); }

    });
};
