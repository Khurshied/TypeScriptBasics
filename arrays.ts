const carMakers:string[] = ['Maruti','Toyota','Hyundai']; 
const dates =[new Date(), new Date()];

const carsByMake:string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();


// prevent incompatible values
// this statement will throw an error
carMakers.push(100);

// help with map
carMakers.map((car:string):string =>
{
  return car.toUpperCase();
})

// flexible types

const importantDates:(Date|string)[] = [new Date()];
importantDates.push('Khursheed');
importantDates.push(new Date());