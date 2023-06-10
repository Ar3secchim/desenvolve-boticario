import { Model } from "../interface/model.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Model<Negotiations> {
  private negotiations: Array<Negotiation> = []

  public additional(negotiation: Negotiation){
    this.negotiations.push(negotiation)
  }

  //read only
  public list(): ReadonlyArray<Negotiation>{
    return this.negotiations
  }

  public forText(): string{
		return JSON.stringify(this.negotiations, null,2)
	}

  public isEquals(negotiations: Negotiations): boolean{
    return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list())
  }
}