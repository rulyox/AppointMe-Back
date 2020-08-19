export const add = (id: string, date: string, startTime: number, endTime: number, name: string, description: string, unavailable: boolean): string =>
    `
    INSERT INTO appointments
    VALUES (NULL, "${id}", "${date}", ${startTime}, ${endTime}, "${name}", "${description}", ${unavailable ? 1 : 0})
    ;`;
