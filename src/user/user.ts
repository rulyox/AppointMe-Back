export class User {

    private _id: string
    private _name: string
    private _pw: string
    private _salt: string

    constructor(id: string, name: string, pw: string, salt: string) {
        this._id = id;
        this._name = name;
        this._pw = pw;
        this._salt = salt;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get pw(): string {
        return this._pw;
    }

    set pw(value: string) {
        this._pw = value;
    }

    get salt(): string {
        return this._salt;
    }

    set salt(value: string) {
        this._salt = value;
    }

}
