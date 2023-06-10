import { Compare } from "./compare.js";
import { Printable } from "../utils/printable.js";

export interface Model<T> extends Printable, Compare<T>{
}