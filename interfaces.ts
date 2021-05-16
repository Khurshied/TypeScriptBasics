interface reportable{
    summary():string;
}

interface Vehcile{
    name:string,
    year:Date,
    broken:boolean,
    summary():string

}

const drink ={
    color:'brown',
    carbonated:true,
    sugar :40,
    summary(): string {
        return `my drink has ${this.sugar} grams of sugar`;
    }
}
const oldCivic: Vehcile ={

    name:'civic',
    year:new Date(),
    broken:true,
    summary():string{
        return `Name: ${this.name}`;
    }
};

const printSummary = (item:reportable):void  => {
    console.log(`Name: ${item.summary}`);
};


printSummary(oldCivic);

