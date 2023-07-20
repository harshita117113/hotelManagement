import { room } from "./room";

export class roomType{
  constructor(
    public type:string,
    public price:number,
    public totalrooms:number,
    public avlrooms:number,
    public roomsarr:room[]
  ){}
}
