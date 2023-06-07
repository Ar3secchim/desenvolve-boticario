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

	public static createIn(dateString: string, amountString: string, valueString: string) {
		const exp = /-/g
    const date = new Date(dateString.replace(exp, ","))
    const amout = parseInt(amountString)
    const value = parseFloat(valueString)

    return new Negotiation(
      date, amout, value
    )
	}
}