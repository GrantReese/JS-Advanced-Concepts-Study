// class Address {
//     constructor (zip, street){
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, {age, phone = "1234567", address } = {}) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address     
//        }
// }
// let user = new User("Bob", {age: 15, address: new Address("1", "Main")})
// console.log(user)

// What makes this a builder?

// Facade Pattern I understand the facade pattern exists to try and simply
// things for the end user, but I am not really sure I grasp how it all fits.

//Observer Pattern 
//The observer pattern seems really useful for more complex actions in js, 
// in sequences.  

// class Observable{
//     constructor(){
//         this.subscribers = []
//     }
//     subscribe(fn){
//         this.subscribers.push(fn);
//     }
//     unsubscribe(fn) {
//         this.subscribers = this.subscribers.filter((item) => item !== fn);
//     }
//     broadcast(data){
//         for(let i = 0; i < this.subscribers.length; i++){
//             this.subscribers[i](data);
//         }
//     }
// }

// const observer = new Observable();  

//destructor seems incredibly useful to unpack data and have access to it.

// let person = {
//     firstName: "Sonny",
//     lastName: "Sangha"
//     currentAge: 28
// }

// let { firstName: fName, lastName: lName} = person;

// const arr = [1, 2, 3];
// let [x, y, z] = arr; 

//spread
//Spread seems like a much easier way to deal with items in arrays and moving them to objects

//memoization
//It calls excisting values that have already been calculated to make the code run
//more efficently. 
//
//

//callbacks
//does work in the background until called, it allows code to run asynch, it lets
//you order how code is performed

