// let str: string;
// let num: number;
// let array: any[];
// let arrayStr: Array<string> = [];
// let any: any;
// let bol: boolean;
// str = "5";
// bol = true
// //num = str;




// array = [5, "51", ['f']]
// arrayStr.push("5");

// let newStr = "string";
// let newNum = 5;

// //newStr * newNum



// function fullName(fName: string, lName?: string, ...parm: any[]): string {
//     console.log(`${fName} ${lName}`);
//     return "ok";
// }





// fullName("Jas", "toj");

// debugger;
// var messenger = {
//     message: "Hello World",
//     start: function () {
//         setTimeout(() => {
//             alert(this.message);
//             console.log(this.message);
//         }, 3000);
//     }
// };
// messenger.start();



// <reference path="./node_modules/@types/jquery/index.d.ts"/>


namespace Zoo {
    interface IAnimal{
        Name: string;
        move(meters:number):void;

    }
    export class Animal implements IAnimal {
        // move(meters: number): void {
        //     throw new Error("Method not implemented.");
        // }
        public Name: string;
        constructor(name: string) {
            this.Name = name;
        }
        move(meters: number): void {
            alert(`${this.Name} moved ${meters}m`)
        }
    }
    export class Horse extends Animal {
        move(m: number): void {
            alert("Galloping...");
            super.move(m);
        }

        // try = () =>{

        //     this
        // }
    }
}
// let tom = new Zoo.Horse("tom");

// tom.move(50);

interface Person {
    firstName: string;
    lastName: string;
    PhoneNumber: number;

}

let person: Person;
import * as $ from 'jquery'
person = {
    firstName: "Jas",
    lastName: "SumToj",
    PhoneNumber: 71071071
}

function addPerson(person: Person): Person {
    debugger;
    $("#table").html("jquery in TS");
    return person;
}

addPerson(person);

enum zoo{
    horse = 1,
    dog = 2

};
if(zoo.dog === 2){
    
}




