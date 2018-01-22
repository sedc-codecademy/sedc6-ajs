//Raw functions

export default function () { ··· } // no semicolon!

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();


//Classes

//------ MyClass.js ------
export default class { ··· } // no semicolon!

//------ main2.js ------
import MyClass from 'MyClass';
const inst = new MyClass();

//Different syntax for import
import { foo } from 'my_module';
import * as foo from 'src/my_module';

//Different syntax for exports
export * from 'src/other_module';
export { foo, bar } from 'src/other_module';
export { foo as myFoo, bar } from 'src/other_module';


//Namespaces

// headline.js file
export {Headline, Primary}
class Headline {}
class Primary {}

// In another module...

import * as Headline from "headline";

let h = new Headline.Headline();
let hp = new Headline.Primary();
