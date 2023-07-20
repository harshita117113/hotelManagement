export class room{
  constructor(
    public roomId:string,
    public isBooked: boolean,
    public icon: string
  ){
    this.isBooked=false;
    this.icon='assets/room.png';
  }
}
