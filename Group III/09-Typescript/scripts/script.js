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
var hey;
var str;
var num;
var bool;
var arrayStr; //Array<string>;
var arrayNum; //number[]; 
var arrayDef;
hey = "hey";
str = "string";
num = 5;
bool = true;
arrayStr = ["test", str];
arrayNum = [15, num];
arrayNum.push(150);
arrayDef = [bool, str, arrayNum];
var newStr = str;
var newNum = 300;
var result = newNum + newStr;
//console.log(result);
var z;
z = num / 1;
//console.log(z);
function sum(x, y) {
    var parm = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        parm[_i - 2] = arguments[_i];
    }
    var c = x + y;
    return c;
}
function newSum(x, y) {
    var c = x + y;
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
        var _this = this;
        setTimeout(function () {
            //debugger;
            alert(_this.message);
        }, 3000);
    }
};
//messenger.start();
var Zoo;
(function (Zoo) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.Name = name;
        }
        Animal.prototype.Move = function (meters) {
            debugger;
            console.log(this.Name + " moved " + meters + "m");
        };
        return Animal;
    }());
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.try = function () {
            };
            return _this;
        }
        Horse.prototype.Move = function (m) {
            debugger;
            alert("Galloping....");
            _super.prototype.Move.call(this, m);
        };
        return Horse;
    }(Animal));
    Zoo.Horse = Horse;
})(Zoo || (Zoo = {}));
var tom = new Zoo.Horse("Tom");
tom.Move(550);
var FullName = function (fname, lname) {
    // let person:IPerson;
    // person.FirstName = fname;
    // person.LastName = lname;
    var p = new Person(fname, lname);
    return p;
};
var NewFullName = function (person) {
    return person;
};
var Person = /** @class */ (function () {
    function Person(f, l) {
        this.FirstName = f;
        this.LastName = l;
    }
    return Person;
}());
var person = {
    FirstName: "Jas",
    LastName: "TojSum"
};
NewFullName(person);
//$("#title").addClass("red");
// hey = "Hello from TypeSrript";
// console.log(hey);
//# sourceMappingURL=script.js.map