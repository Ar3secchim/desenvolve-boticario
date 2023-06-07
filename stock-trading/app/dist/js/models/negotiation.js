export class Negotiation {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get volume() {
        return this.amount * this.value;
    }
    get data() {
        const data = new Date(this._date.getTime());
        return data;
    }
    static createIn(dateString, amountString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const amout = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Negotiation(date, amout, value);
    }
}
