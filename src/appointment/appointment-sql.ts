export const add = (id: string, date: string, startTime: string, endTime: string, name: string, description: string, color: string): string =>
    `
    INSERT INTO appointments
    VALUES (NULL, "${id}", "${date}", ${startTime}, ${endTime}, "${name}", "${description}", "${color}")
    ;`;

export const selectByWeek = (id: string, week: string): string =>
    `
    SELECT user_id, DATE_FORMAT(app_date, '%Y-%m-%d') AS app_date, start_time, end_time, app_name, app_description, app_color
    FROM appointments
    WHERE user_id = "${id}"
        AND WEEK(app_date, 1) = WEEK("${week}", 1)
    ORDER BY app_date, start_time
    ;`;
