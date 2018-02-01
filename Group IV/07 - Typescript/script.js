"use strict";
// let str: string;
// let num: number;
// let array: any[];
// let arrayStr: Array<string> = [];
// let any: any;
// let bol: boolean;
// str = "5";
// bol = true
// //num = str;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var Zoo;
(function (Zoo) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.Name = name;
        }
        Animal.prototype.move = function (meters) {
            alert(this.Name + " moved " + meters + "m");
        };
        return Animal;
    }());
    Zoo.Animal = Animal;
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Horse.prototype.move = function (m) {
            alert("Galloping...");
            _super.prototype.move.call(this, m);
        };
        return Horse;
    }(Animal));
    Zoo.Horse = Horse;
})(Zoo || (Zoo = {}));
var person;
var $ = require("jquery");
person = {
    firstName: "Jas",
    lastName: "SumToj",
    PhoneNumber: 71071071
};
function addPerson(person) {
    debugger;
    $("#table").html("jquery in TS");
    return person;
}
addPerson(person);
var zoo;
(function (zoo) {
    zoo[zoo["horse"] = 1] = "horse";
    zoo[zoo["dog"] = 2] = "dog";
})(zoo || (zoo = {}));
;
if (zoo.dog === 2) {
}
//# sourceMappingURL=script.js.map