import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { bookRoom } from 'src/app/shared/bookRoom';
import { hotel } from 'src/app/shared/hotels';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent {
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

  pGuest:boolean=false;
  addGuest:boolean=false;
  showhotels: boolean=false;
  showForm: boolean=true;
  showdetails:boolean=false;
  showBookingForm:boolean=false;
  showBookingDetails:boolean=false;
  done:boolean=false;
  paid:boolean=false;

  today =new Date;
  toString(date:Date){
    let yyyy:number=date.getFullYear();
    let mm:number=date.getMonth() +1;
    let dd:number=date.getDate();
    let strtoday=yyyy+"-"+mm+"-"+dd;
    if(mm<10 && dd<10) {
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
    this.checkin=new Date(hotelfilter.value.from);
    //this.defcheckout=(this.checkin + 24*60*60*1000);
    this.checkout=new Date(hotelfilter.value.to);
    this.nights=Math.floor((this.checkout.getTime() - this.checkin.getTime()) / 1000 / 60 / 60 / 24);
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
      this.showBookingDetails=true;
      this.showBookingForm=true;
    }
  }

  guestDetails(){
    this.primaryg.name=this.bookDetails.value.title+" "+this.bookDetails.value.fname+" "+this.bookDetails.value.lname;
    this.primaryg.email=this.bookDetails.value.email;
    this.primaryg.contact=this.bookDetails.value.contact;
    const control=<FormArray>this.bookDetails.controls['guests'];
    let c=control.value;
    for(var i=0;i<c.length;i++)
    {
      let name=c[i].title+" "+c[i].fname+" "+c[i].lname;
      this.guestList.push(name);
    }

    console.log(this.guestList);
    this.showBookingForm=false;
    this.pGuest=true;
    this.done=true;
  }

  bookDetails:FormGroup;
  constructor(public router: Router){
    this.createForm();
  }

  createForm(){
      this.bookDetails = new FormGroup({
      title: new FormControl(""),
      fname: new FormControl(""),
      lname: new FormControl(""),
      email: new FormControl(""),
      contact: new FormControl(""),
      guests: new FormArray([
        new FormGroup({
          title :new FormControl(''),
          fname: new FormControl(''),
          lname: new FormControl(''),
        })
      ])
    })
  }

  addguest(){
    const control=<FormArray>this.bookDetails.controls['guests'];
    control.push(
      new FormGroup({
        title :new FormControl(''),
        fname: new FormControl(''),
        lname: new FormControl('')
      })
    )
    console.log(control.value);
  }

  removeGuest(index){
    const control=<FormArray>this.bookDetails.controls['guests'];
    control.removeAt(index);
  }
}
