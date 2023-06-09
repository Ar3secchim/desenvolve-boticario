import { NegotiationDay } from "../interface/negotiationDay";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationService{

  public async getNegociationsDays(): Promise<Negotiation[]>{
    const res = await fetch('http://localhost:8080/data');
    const datas = await res.json();

    return datas.map((dataDay:NegotiationDay) => {
      return new Negotiation(
        new Date(),
        dataDay.amount,
        dataDay.value
      );
    });
  }
}