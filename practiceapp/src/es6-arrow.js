class User {
    constructor(name = 'anonymous', age=0){
      this.name = name;
      this.age =  age;
    }

    // getGreeting(){
    //   return "Hello, I am " + this.name;
    // }
    getGreeting(){
      return `hello , I am ${this.name}`
    }
    getInfo(){
      return `${this.name} is ${this.age} years old`
    }
}

class Employee extends User {
      constructor(name, age,ssn){
        super(name,age)
        this.ssn = ssn;
      }
      ssnNumber(){
        return `My ssn is ${this.ssn}`;
      }
      getInfo(){
        let info = super.getInfo();
        info +=` My ssn is ${this.ssn}`
        return info;
      }
}



const user1 = new Employee('Jhon Doe',20,19020);
//console.log(user1.ssnNumber());
console.log(user1.getInfo());
// console.log(user1.getInfo());

const user2 = new Employee ();
console.log(user2.ssnNumber());
console.log(user2.getInfo());
// console.log(user2.getGreeting());
// console.log(user2.getInfo());