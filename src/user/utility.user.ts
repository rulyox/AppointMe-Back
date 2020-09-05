import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import serverConfig from '../../config/server.json';

export const createRandomSalt = () => {

    const random = crypto.randomBytes(10);
    return random.toString('hex');

};

export const hash = (plainText: string, salt: string) => {

    const cipherText = crypto.pbkdf2Sync(plainText, salt, 100000, 64, 'sha512');
    return cipherText.toString('hex');

};

export const createJWT = (id: string): Promise<string> => {
    return new Promise((resolve, reject) => {

        let payload = {
            id: id
        };

        let options = {
            expiresIn: '7d'
        };

        jwt.sign(payload, serverConfig.jwtSecret, options, (error, token) => {

            if(error) reject(error);
            resolve(token);

        });

    });
};

export const verifyJWT = (token: string) => {
    return new Promise((resolve, reject) => {

        jwt.verify(token, serverConfig.jwtSecret, (error, decoded) => {

            if(error) reject(error);
            resolve(decoded);

        });

    });
};
