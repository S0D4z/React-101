const a: number = 1

console.log(a);

let b: string = 'Hello World'

console.log(b);

class Person {
  constructor(public name: string) {}
}

const user = new Person('guutong')

console.log(user);

let myName: any = "tong"

myName = 3

console.log(myName);


let myAge: unknown = 99

myAge = '999'

console.log(myAge);

// condition
// if () {}
// else {}

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// do {

// } 
// while()


// while (condition) {
  
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// for (const key in object) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];
    
//   }
// }

// for (const iterator of object) {
  
// }

// Function

function add(n1: number, n2: number): number {
  return n1+n2;
} 

add(1, 2)

function printResult(num: number): void{
  console.log(num);
}
printResult(add(1, 2))



let add1: (a1: number, a2: number) => number = (a1: number, a2: number): number => a1 + a2


printResult(add1(1, 2))


// function add2(n1: number, n2: number): number {}
// function add2(n1: string, n2: number): number {}
// function add2(n1: string, n2: string): number {}


const user2: { name: string, age: number } = {
  name: 'guutong',
  age: 20
}

console.log(user2);

const { name: name1, age } = user2

console.log(name1, age);

type User = {
  name: string;
  age: number
}

type UserWithEmail = User & {
  // readonly email: string
  email: string
}


type Profile<T> = {
  name: string;
  age: number
  profile: T;
}

// const profile1: Profile<string> = {
//   name: '1',
//   age: 0,
//   profile: '2',
// }
// const profile2: Profile<number> = {
//   name: '1',
//   age: 0,
//   profile: 2,
// }
// const profile3: Profile<User> = {
//   name: '1',
//   age: 0,
//   profile: {
//     name: '1',
//     age: 2
//   },
// }

function addEmail(user: User): UserWithEmail {
  return {
    name: user.name,
    age: user.age,
    email: 'email@test.com'
  }
}

const user3 = addEmail(user2)
// user3.email = '1111'

console.log({ ...user3 });


// Array 
// const hobbies: Array<string> = ['Sports', 'Cooking']
// const hobbies1: Array<{ name: string, age: number }> = []
// const hobbies2: Array<User> = []
const hobbies: string[] = ['Sports', 'Cooking']

// hobbies.push()
// hobbies.map()

// destructuring
const [h1, h2] = hobbies

console.log(h1, h2);

console.log(...hobbies);

let role: [number, string] = [1, 'SuperAdmin']
console.log(role);
console.log(role[0]);
console.log(role[1]);

let httpStatus: [number, string][] = [
  [200, 'OK'],
  [400, 'Bad request'],
  [401, 'Unauthorized'],
  [403, 'Forbidden'],
]
console.log(httpStatus);

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {

  constructor(private width: number,private height: number) {}

  calculateArea(): number {
    return this.width * this.height
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2)
  }
}

const rectangle = new Rectangle(10, 20)
console.log(rectangle.calculateArea());

const circle = new Circle(10)
console.log(circle.calculateArea());

class Pair<A,B> {
  constructor(private a: A, private b: B) {}

  getFirst(): A {
    return this.a
  }

  getSecond() : B {
    return this.b
  }
}

const pair: Pair<number, string> = new Pair<number, string>(200, 'OK')
console.log(pair.getFirst())
console.log(pair.getSecond())

// 
