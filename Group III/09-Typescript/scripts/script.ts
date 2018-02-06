let hey: any;
let str: string;
let num: number;
let bool: boolean;
let arrayStr: string[]; //Array<string>;
let arrayNum: Array<number>; //number[]; 
let arrayDef: Array<any>;

hey = "hey";

str = "string";
num = 5;
bool = true;

arrayStr = ["test", str];

arrayNum = [15, num]
arrayNum.push(150);

arrayDef = [bool, str, arrayNum];

let newStr = str;
let newNum = 300;

let result: any = newNum + newStr;
//console.log(result);
let z: any;
z = num / 1;

//console.log(z);


function sum(x: number, y: number, ...parm: any[]): number {
    let c = x + y;
    return c;
}
function newSum(x: number, y?: number): void {
    let c = x + y;
    //console.log(c);
    //sum(x,y);
}



sum(15, 5);
sum(5, 10, 15, 20);
newSum(150, 50);
newSum(25);

//debugger;
var messenger = {
    message: "Hello World",
    start: function () {
        setTimeout(() => {
            //debugger;
            alert(this.message);
        }, 3000);
    }
};
//messenger.start();

namespace Zoo {
    interface IAnimal {
        Name: string;
        Move(meters: number): void;
    }

    class Animal implements IAnimal {
        Name: string;
        constructor(name: string) {
            this.Name = name;
        }
        Move(meters: number): void {
            debugger;
            console.log(`${this.Name} moved ${meters}m`);
        }
    }

    export class Horse extends Animal {
        Move(m: number) {
            debugger;
            alert("Galloping....");
            super.Move(m);
        }

        try = () => {


        }
    }
}
let tom = new Zoo.Horse("Tom");
tom.Move(550);

interface IPerson {
    FirstName: string;
    LastName: string;
}

let FullName = (fname:string, lname:string):IPerson =>{
    let person:IPerson = {
    FirstName: fname,
    LastName: lname
}
    //let p = new Person(fname, lname);
    return person;
}


let NewFullName = (person:IPerson):IPerson =>{
    return person;
}
class Person implements IPerson {
    constructor (f:string,l:string){
        this.FirstName = f;
        this.LastName = l
    }

    FirstName: string;
    LastName: string;
}
let person: IPerson = {
    FirstName: "Jas",
    LastName: "TojSum"
}
NewFullName(person);
///<reference path="./node_modules/@types/jquery/index.d.ts"/>
$("#title").addClass("red");



































// hey = "Hello from TypeSrript";
// console.log(hey);
