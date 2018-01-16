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


//In console
//let user = new User;
//let users = new Users;

//user.doSomething(); users.doSomething();
