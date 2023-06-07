export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    additional(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
}
