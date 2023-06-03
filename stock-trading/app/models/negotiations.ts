import { Negotiation } from "./negotiation.js";

export class Negotiations {
  private negotiations: Array<Negotiation> = []

  public additional(negotiation: Negotiation){
    this.negotiations.push(negotiation)
  }

  //read only
  public list(): ReadonlyArray<Negotiation>{
    return this.negotiations
  }
}