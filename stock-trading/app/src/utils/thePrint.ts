import { Printable } from "./printable.js";

export function thePrint(...object: Printable[]){
  for(let objects of object){
    console.log(objects.forText())
  }
}