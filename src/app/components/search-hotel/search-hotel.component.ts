import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookRoom } from 'src/app/shared/bookRoom';
import { hotel } from 'src/app/shared/hotels';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent {
  //constructor(public router: Router){}
  filteredHotels:any;
  hotelIdx:number=0;
  selectedRooms:number=0;
  selectedRoomsArr:bookRoom[]=[];
  totalPrice: number=0;
  checkin:any;
  checkout:any;
  rooms:number=0;
  adults:number=0;
  childrens:number=0;
  nights:number=0;
  primaryg={
    name:"",
    email: "",
    contact:""
  }
  guestList:string[]=[];

  pGuest="-1";
  addGuest:boolean=false;
  showhotels: boolean=false;
  showForm: boolean=true;
  showdetails:boolean=false;
  showBooking:boolean=false;
  done:boolean=false;

  today =new Date;
  toString(date:Date){
    let yyyy:number=date.getFullYear();
    let mm:number=date.getMonth() +1;
    let dd:number=date.getDate();
    let strtoday=yyyy+"-"+mm+"-"+dd;
    console.log(date);
    if(mm<10 && dd<10)
    {
      strtoday=yyyy+"-0"+mm+"-0"+dd;
    }
    else {
      if(mm<10)
      {
        strtoday=yyyy+"-0"+mm+"-"+dd;
      }
      if(dd<10)
      {
        strtoday=yyyy+"-"+mm+"-0"+dd;
      }
    }
    console.log(strtoday);
    return strtoday;
  }
  strtoday=this.toString(this.today);
  hotelsList: hotel[] = [
    {
      hid: "IH1",
      name: "Indore Hotel 1",
      city: "Indore",
      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H1 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H1 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H1 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H1 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H1 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "IH2",
      name: "Indore Hotel 2",
      city: "Indore",
      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H2 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H2 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H2 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H2 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H2 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "IH3",
      name: "Indore Hotel 3",
      city: "Indore",

      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H3 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H3 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H3 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H3 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H3 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "BH1",
      name: "Bhopal Hotel 1",
      city: "Bhopal",

      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H1 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H1 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H1 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H1 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H1 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "BH2",
      name: "Bhopal Hotel 2",
      city: "Bhopal",

      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H2 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H2 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H2 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H2 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H2 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "BH3",
      name: "Bhopal Hotel 3",
      city: "Bhopal",

      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H3 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H3 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H3 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H3 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H3 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "UH1",
      name: "Ujjain Hotel 1",
      city: "Ujjain",

      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H1 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H1 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H1 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H1 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H1 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "UH2",
      name: "Ujjain Hotel 2",
      city: "Ujjain",

      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H2 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H2 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H2 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H2 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H2 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
    {
      hid: "UH3",
      name: "Ujjain Hotel 3",
      city: "Ujjain",

      address:"address",
      img: "assets/hotel1.jpg",
      roomsType:[
        {
          type:"Standard",
          price: 600,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H3 101",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H1 102",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Deluxe",
          price: 1200,
          totalrooms:2,
          avlrooms:2,
          roomsarr: [
            {
              roomId:"H3 103",
              isBooked: false,
              icon:'assets/room.png'
            },
            {
              roomId:"H3 104",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        },
        {
          type:"Suite",
          price: 1600,
          totalrooms:1,
          avlrooms:1,
          roomsarr: [
            {
              roomId:"H3 105",
              isBooked: false,
              icon:'assets/room.png'
            }
          ]
        }
      ]
    },
  ];

  submit(hotelfilter: NgForm)
  {
    function checkCity(arr:any){
      return arr.city==hotelfilter.value.city;
    }
    this.filteredHotels=this.hotelsList.filter(checkCity);


    console.log(hotelfilter.value.from);
    this.checkin=new Date(hotelfilter.value.from);
    //this.defcheckout=(this.checkin + 24*60*60*1000);
    this.checkout=new Date(hotelfilter.value.to);
    this.nights=Math.floor((this.checkout.getTime() - this.checkin.getTime()) / 1000 / 60 / 60 / 24);
    console.log(this.nights);
    this.rooms=hotelfilter.value.rooms;
    this.adults=hotelfilter.value.adults;
    this.childrens=hotelfilter.value.childrens;
    if(this.nights>30)
    {
      alert("Cannot Book for more than a month")
    }
    else if(this.nights<=0)
    {
      alert("Must Book for atleast 1 day")
    }
    else{
      this.showForm=false;
      this.showhotels=true;
    }

  }

  hotelDetails(id:string)
  {
    function idx(arr:any)
    {
      return arr.hid==id;
    }
    this.hotelIdx=this.filteredHotels.findIndex(idx);

    this.showhotels=false;
    this.showdetails=true;
  }

  onSelect(roomId:number,roomTypeID:number)
  {
    if(this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].roomsarr[roomId].icon=='assets/roomSelected.png')
    {
      this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].roomsarr[roomId].icon='assets/room.png';
      this.selectedRooms--;
      this.totalPrice-=this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].price;
      let r=this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].roomsarr[roomId].roomId;
      function idx(arr:any)
      {
        return arr.roomID==r;
      }
      let id=this.selectedRoomsArr.findIndex(idx);

      this.selectedRoomsArr.splice(id,1);
    }
    else{
    this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].roomsarr[roomId].icon='assets/roomSelected.png';
    this.selectedRooms++;
    this.totalPrice+=this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].price;
    let br=new bookRoom(
      this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].roomsarr[roomId].roomId,
      this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].price,
      this.filteredHotels[this.hotelIdx].roomsType[roomTypeID].type
    ) ;
    this.selectedRoomsArr.push(br);
    }
  }

  bookForm()
  {
    if(this.selectedRooms>this.adults)
    {
      alert("You Must Book less than "+(this.adults+1)+" Rooms")
    }
    else{
      this.showdetails=false;
      this.showBooking=true;
      this.pGuest="0";
    }
  }

  guestDetails(guests:NgForm){
    this.primaryg.name=guests.value.title+" "+guests.value.fname+" "+guests.value.lname;
    this.primaryg.email=guests.value.email;
    this.primaryg.contact=guests.value.contact;
    this.pGuest="1";
  }
  addon(){
    this.addGuest=true;
  }
  payNow(){
    this.done=true;
  }
  saveGuest(guests:NgForm)
  {
    let name=guests.value.title+" "+guests.value.fname+" "+guests.value.lname;
    this.guestList.push(name);
    this.addGuest=false
  }
}
