export class Negotiation {
	constructor(
		private _date : Date,
		readonly amount: number,
		readonly value: number
	){}

	get volume(): number {
		return this.amount * this.value;
	}

	get data(): Date {
		const data = new Date(this._date.getTime())
		return data
	}
}