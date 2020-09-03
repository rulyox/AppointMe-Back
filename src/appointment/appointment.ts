export class Appointment {

    private _userId: string;
    private _date: string
    private _startTime: string
    private _endTime: string
    private _name: string
    private _description: string
    private _color: string

    constructor(userId: string, date: string, startTime: string, endTime: string, name: string, description: string, color: string) {
        this._userId = userId;
        this._date = date;
        this._startTime = startTime;
        this._endTime = endTime;
        this._name = name;
        this._description = description;
        this._color = color;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get startTime(): string {
        return this._startTime;
    }

    set startTime(value: string) {
        this._startTime = value;
    }

    get endTime(): string {
        return this._endTime;
    }

    set endTime(value: string) {
        this._endTime = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

}
