export class Tournament {    
    constructor(
        private _id: number,
        private _title: string,
        private _description: string
    ){}

    get title() { return this._title }
    set title(value) { this._title = value }

    get description() { return this._description }
    set description(value) { this._description = value }

    get id() { return this._id }
}