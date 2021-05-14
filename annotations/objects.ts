// annotations around objects
const profile ={

  name : 'khursheed',
  age:20,
  coords:
  {
    lat :0,
    lng:15
  }, 
  setAge(age:number):void{
    this.setAge = age;
  }
};

const {coords:{lat, lng}}: {coords:{lat:number, lng:number}} = profile;

