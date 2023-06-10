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
    forText() {
        return JSON.stringify(this.negotiations, null, 2);
    }
    isEquals(negotiations) {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list());
    }
}
//# sourceMappingURL=negotiations.js.map