const drink ={
  colo:'brown',
  carbondated:true,
  sugar:40
}


// alias
type Drink = [string, boolean, number];

// enforce type in array having elements of different type
// Drink is reusable
const pepsi:Drink =[ 'brown',true, 40];

const carSpecs:[number, number] = [4454,5565];

const carStats = {
  horsepower:12,
  weight:234
}


