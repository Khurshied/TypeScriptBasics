class Vehicle{
   
    constructor(public color:string){}

    protected honk():void{
        console.log('honk honk');
    }
}

class Car extends Vehicle{

    constructor(public wheels:number, color:string)
    {
        super(color);
    }

   private drive():void{
        console.log('WOW WOW');
    }

    startDrivingProcess():void{
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('Red');

const car = new Car(4,'Red');
