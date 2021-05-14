
// type inference for return values
const add =(a:number,b:number) => {
  return a+b;
};


// best practice: explicitly mention return type
const subtract =(a:number, b:number):number =>
{
  return a-b;
};


// we can define function without assigning it to a variable
function divide(a:number, b:number):number
{
  return a/b;
};

const multiply = (a:number, b:number) : number =>{
  return  a*b;
}

const logger =(message:string):void =>{
  console.log(message);
};


//corner case: never specify that function will not return any values in any case
// means there is never change to reach the end of the function

const throwAir = (message:string):never =>
{
  
    throw new Error(message);

}
 
const throwWater = (message:string):void =>
{
  
    throw new Error(message);
  
}

const todaysWeather ={
  date :new Date(),
  weather :'sunny'
};



//destructuring with annotation
const logWeather = ({date,weather}:{date:Date, weather:string}):void =>
{
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);
