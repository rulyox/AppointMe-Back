export const selectById = (id: string): string =>
    `
    SELECT *
    FROM users
    WHERE id = "${id}"
    ;`;

export const selectByIdPw = (id: string, pw: string): string =>
    `
    SELECT *
    FROM users
    WHERE id = "${id}" AND pw = "${pw}"
    ;`;

export const selectSalt = (id: string): string =>
    `
    SELECT salt
    FROM users
    WHERE id = "${id}"
    ;`;

export const add = (id: string, name: string, pw: string, salt: string): string =>
    `
    INSERT INTO users
    VALUES ("${id}", "${name}", "${pw}", "${salt}")
    ;`;
