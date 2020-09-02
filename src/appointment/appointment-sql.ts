export const add = (id: string, date: string, startTime: number, endTime: number, name: string, description: string, color: string): string =>
    `
    INSERT INTO appointments
    VALUES (NULL, "${id}", "${date}", ${startTime}, ${endTime}, "${name}", "${description}", "${color}")
    ;`;

export const selectByWeek = (id: string, week: string): string =>
    `
    SELECT MONTH(app_date) as month, DAY(app_date) as day, WEEKDAY(app_date) as weekday, start_time, end_time, app_name, app_description, app_color
    FROM appointments
    WHERE user_id = "${id}"
        AND WEEK(app_date, 1) = WEEK("${week}", 1)
    ORDER BY app_date, start_time
    ;`;
