export const add = (id: string, date: string, startTime: number, endTime: number, name: string, description: string, unavailable: boolean): string =>
    `
    INSERT INTO appointments
    VALUES (NULL, "${id}", "${date}", ${startTime}, ${endTime}, "${name}", "${description}", ${unavailable ? 1 : 0})
    ;`;

export const selectByWeek = (id: string, week: string): string =>
    `
    SELECT MONTH(appoint_date) as appoint_month, DAY(appoint_date) as appoint_day, WEEKDAY(appoint_date) as appoint_weekday, start_time, end_time, appoint_name, appoint_desc, unavailable
    FROM appointments
    WHERE user_id = "${id}"
        AND WEEK(appoint_date, 1) = WEEK("${week}", 1)
    ORDER BY appoint_date, start_time
    ;`;
