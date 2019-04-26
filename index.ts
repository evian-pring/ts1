import { MyModuleObject } from './jsModules';

console.log(MyModuleObject.method());

// Basic Types
let isDone: boolean = false;

let num: number = 5;

let color: string = 'red';

//  arrays
let list: number[] = [1, 2, 3];

let list1: Array<number> = [1, 2, 3];

// tuple
let x: [string, number] = ['hello', 1];

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// enums begin numbering at 0, but we can override this if we wish
enum Sports {
  Basketball = 1,
  Football = 2,
}

let sport: string = Sports[1];

// any
let notSure: any = 4;
notSure = 'string';
notSure = false;

let list2: any[] = [1, 'string', false];

// void: absence of having any value at all
// can only assign undefined or null to a void type variable
let unusable: void = undefined;

// null and undefined are types
// are subtypes of all other types (so can assign them to the other types, except if --strictNullChecks is on)
// then they are only assignable to void and their respective types

// never
// types of values that never occur
// subtype of, and assignable to, every type
function error(message: string): never {
  throw new Error(message);
}

// object: anything that is not a primitive type (number, string, boolean, symbol, null, undefined)
