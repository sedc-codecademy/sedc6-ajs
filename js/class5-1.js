//Prototypes

//ES6
class User
{
    constructor()
    {

    }

    userId()
    {
        return 1;
    }

    doSomething()
    {
        console.log("User "+ this.userId() +" is doing something");
    }
}

//Old
function Users() {}
Users.prototype.doSomething = function() { console.log("Users are doing something") };
//console.log(User, Users);

/*
function classA(argument1, argument2)
{
    this.argument1 = argument1;
    this.argument2 = argument2;
}

function classB(argument1, argument2, argument3)
{
    this._super.call(this, argument1, argument2);
    this.argument3 = argument3;
}

//Inherit
classB.prototype = Object.create(classA.prototype);

// set the constructor
classB.prototype.constructor = classB;

// set the "_super" to the classA constructor function
Student.prototype._super = classA;
*/

//In console
//let user = new User;
//let users = new Users;

//user.doSomething(); users.doSomething();
