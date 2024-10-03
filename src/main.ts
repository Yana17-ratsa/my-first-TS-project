import './style.css';

//---------------------------------------------/
/***************** LESSON 1 *****************/
//---------------------------------------------/

//! 5 basic types
// const name: string = "Bob";
// const lastName : string = "Wells";
// const age : number = 37;
// const isHappy : boolean = true;
// const budget: null = null;
// const status :   undefined = undefined;

//? EXAMPLE
// function LogName (name : string) {
//     return `${name}`
// }

// console.log(LogName("Yana"));

//TODO:  OBJECTS

// type userProfile = {
//     userName: string;
//     age: number;
//     isActive: boolean;
// }

// const user =  {
//     userName:"Bob",
//     age: 12,
//     isActive: false,
// }

// function displayUserProfile (user: userProfile) {
//     return `User's name is ${user.userName} he is ${user.age} years old and he is ${user.isActive}`
// }

// console.log(displayUserProfile(user));

//TODO: ARRAYS

// type User = {
//     name: string;
//     age: number;
// }
// function calculateTotal (array : User[]) {}

// const users = [
//     {
//         name: "bob", age: 12
//     },
//     {
//         name: "bob", age: 23
//     },
//     {
//         name: "bob", age: 45
//     },
// ]

// console.log(calculateTotal(users));

//TODO: unknown

// function safelyParseJson (jsonString : string) {
//     try {
//         const result : unknown = JSON.parse(jsonString);
//         if (typeof result === "object" && result !== null) {
//             return result;
//         }
//     } catch (error) {
//         console.error("Failed ro parse JSON", error)
//     }
//     return null
// }

//TODO: any

// function logdetails (value: any) {
//     console.log(`value: ${value}, Type of value: ${typeof value}`);
// }

//TODO : enum (словник)

// enum VehicleType {
//     Car = "Audi",
//     Truck = "Scania",
//     Motorcycle = "Ducati"
// }

// function getVehicleType(vehicle: VehicleType) {
//     return `The vehicle type is: ${vehicle}.`;
// }

// // Example usage:
// console.log(getVehicleType(VehicleType.Car));        // Output: "The vehicle type is: Audi."
// console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Ducati."

//TODO: Union types (you can add more tham just 2 types)

// function formatInput(input: string | number) {
//     if (typeof input === 'number') {
//         return input.toFixed(2); // Formats the number to two decimal places
//     } else {
//         return input.toUpperCase(); // Converts the string to uppercase
//     }
// }

//TODO: Literal

// function trafficLight (color : 'green' | 'yellow' | 'red') {
//     if (color === "green") {
//             console.log("go");
//           } else if (color === "yellow") {
//             console.log("get ready");
//           } else if (color === "red") {
//             console.log("wait");
//           }
// }

// trafficLight('green');

//TODO: Типізація of return

// //? It means that we  receive text (string), but we do also return text (string). Це ми будемо найчастіше використовувати в запитах (HTTP requests)

// function LogName (name : string) : string {
//     return `${name}`
// }
// console.log(LogName("Yana"));

// //? Це для тих функцій, які нічого не повертають. Void - сигнал того, що функція нічого не повертає (наприклад, колбеки, addEventListenerS і т.д.)

// function LogName2 (name : string) : void {
//     console.log(`${name}`);
// }
// console.log(LogName2('Mariia'));

//TODO:  never
// //? Для реалізації негативної типізації логіки
// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// errorHandler("Critical error occurred!");  // Throws an Error with the provided message

//TODO: INTERFACE

// //? Використовується з класами з Реакту (для їх типізації)
// //? Знак питання в кінці ключа додається до необов'язкових ключів
// interface User {
//     name: string;
//     age: number;
//     lastName?: string;
//     sayHello() : string;
//     sayBye () : void;
//     showAge (userAge : number) : string;
// }

// const student : User = {
//     name: 'Bob',
//     age: 12,
//     sayHello() {
//         return 'hello';
//     },
//     sayBye () {
//         console.log("bye");
//     },
//     showAge (userAge : number) {
//         return `My age is ${userAge}`
//     }
// }

// console.log(student.showAge(45));

//---------------------------------------------/
/***************** LESSON 2 *****************/
//---------------------------------------------/

//TODO: INDEX PROPERTIES

// interface List {
//   [key:string]: number | null
// }

// // !Так не робити. Багато монотонності
// type Fruits = {
//   apples: number;
//   banana: number;
//   oranges: number;
// };

// const fruits: List = {
//   apples: 10,
//   banana: 15,
//   oranges: 25,
//   pinaple: 10,
//   peach: null
// };

// console.log(fruits);

//TODO: Generics
//? "T" - для обробки позитивної обробки функції, та undefined - для негативної
//! Завжди опрацьовувати позитивні і негативні сценарії
//*First exmple
// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// const numberArray = [10, 20, 30];
// const stringArray = ['hello', 'world', 'typescript'];
// const objectArray = [{ name: 'Alice' }, { name: 'Bob' }];

// console.log(getFirstElement(numberArray));
// console.log(getFirstElement(stringArray));
// console.log(getFirstElement(objectArray));

//*Second example  (Simple generic)
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = {
//   name: 'John',
//   age: 30,
//   occupation: 'Engineer',
//   gender: 'male',
// };

// const name = getProperty(person, 'name');
// const age = getProperty(person, 'age');
// const gender = getProperty(person, 'gender');

// console.log(name, age, gender);

//*Third example ( Partial in generic)
// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   username: 'johndoe',
//   email: 'john.doe@example.com',
//   age: 28,
// };
// //? pARTIAL  - Значит что оновлюватися будуть тільки ті ключі, які ми зазначили, а всі інші - залишити без змін
// function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
//   return {
//     ...profile,
//     updates,
//   };
// }

// const updatedProfile = updateProfile(originalProfile, {
//   email: 'new.john.doe@example.com',
//   age: 29,
// });

// console.log(updateProfile(originalProfile, updatedProfile));

//*4th example (Readonly)

interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = {
  id: 101,
  name: 'John',
};

user.id = 100;
//! eror.it is  aa read-only property
