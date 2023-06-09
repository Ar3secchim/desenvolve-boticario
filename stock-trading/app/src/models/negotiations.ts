import { Printable } from "../utils/printable";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Printable {
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
}