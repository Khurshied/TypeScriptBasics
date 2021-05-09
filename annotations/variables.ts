// Type annotations for each type category 


// 1. Primitive types
let apples: number = 5;
let speed:string = "fast";
let hasName:boolean = true;

let nothingMuch: null =null;
let nothing:undefined =undefined;


// 2.  buit in objects
let now:Date = new Date();


// 3.  array

let colors:string [] = ['red', 'green','blue'];
let myNumbers:number[] = [1,2,3];
let truths:boolean[] = [true, false, true];

// 4. classes
class Car{

}
let car:Car = new Car();


// 4. Object literal

let point : {x:number, y:number} = {
  x:10,
  y:20
}

let Book:{name:string, ISBN:string,IsOutofStoack:boolean }=
{
  name:'Fooled by randomness',
  ISBN: '1238U232KHFSK',
  IsOutofStoack:true
}



// 5. functions
const logNumber: (i:number) => void = (i:number) => {
  console.log(i);
}

// when to use annotations

//case 1. When function returns any type

const json = '{"x":10, "y":20}';
const coordinates:{x:number, y:number} = JSON.parse(json);
console.log(coordinates);


// case 2. when a variable is decalred on one line and initialized later
 let words = ['red','green','blue'];
 let foundWord:boolean;
 for(let i =0;i<words.length;i++)
  {
    if(words[i] == 'green')
   foundWord = true;
  }



  // 3. Variable whose type cannot be inferred correctly

  let numbers = [1,2,3];
  let numberAboveZero : boolean |number  = false;
  for(let i=0;i <numbers.length;i++)
  {
    if(numbers[i] > 0)
    numberAboveZero = numbers[i];
  }




