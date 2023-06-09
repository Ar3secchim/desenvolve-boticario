import { Printable } from "./printable";

export function thePrint(...object: Printable[]){
  for(let object of object){
    console.log(object.forText())
  }
}