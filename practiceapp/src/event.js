// const square = function(x){
//   return x*x
// }
// console.log(square(3));

// const sqarrow = (x) => {

//   return x*x;
// }
// console.log(sqarrow(9));

// const sqEX = (x)=>x*x;
// console.log(sqEX(5));

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }
// console.log(getFirstName("Jhon Doe"));

const addition = (a,b) => {
    return a+b;
  }
  console.log(addition(2,2));
  
  const customer = {
    name:"Jhon Doe",
    cities: ["New York","Paris","London"],
  
    printCitiesLived : function(){
      console.log(this.name);
      console.log(this.cities);
  
      this.cities.forEach((city)=>{
        console.log(this.name + 'has visited ' + city);
      });
    } 
  
  }
  
  customer.printCitiesLived();
  