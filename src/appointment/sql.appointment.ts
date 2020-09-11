export const add = (id: string, date: string, startTime: string, endTime: string, name: string, description: string, color: string): string =>
    `
    INSERT INTO appointments
    VALUES (NULL, '${id}', '${date}', ${startTime}, ${endTime}, '${name}', '${description}', '${color}')
    ;`;

export const selectOverlap = (id: string, date: string, startTime: string, endTime: string): string =>
    `
    SELECT COUNT(*) AS count
    FROM appointments
    WHERE user_id = '${id}'
        AND app_date = '${date}'
        AND (start_time < ${endTime} AND end_time > ${startTime})
    ;`;

export const selectByWeek = (id: string, week: string): string =>
    `
    SELECT id, user_id, DATE_FORMAT(app_date, '%Y-%m-%d') AS app_date, start_time, end_time, app_name, app_description, app_color
    FROM appointments
    WHERE user_id = '${id}'
        AND WEEK(app_date, 1) = WEEK('${week}', 1)
    ORDER BY app_date, start_time
    ;`;

export const selectUser = (id: number): string =>
    `
    SELECT user_id
    FROM appointments
    WHERE id = ${id}
    ;`;

export const deleteAppointment = (id: number): string =>
    `
    DELETE FROM appointments
    WHERE id = ${id}
    ;`;
