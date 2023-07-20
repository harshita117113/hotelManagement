import { roomType } from "./roomType";

export class hotel{
  constructor(
    public hid:string,
    public name:string,
    public city:string,
    public address: string,
    public img: string,
    public roomsType:roomType[]
  ){}
}
