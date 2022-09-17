import React from 'react';
import ReactDOM from 'react-dom/client';

// var test1 = <div>
//               <h1>Anusha BR</h1>
//               <p>Some info about me</p>
//               <ol>
//                 <li>One</li>
//                 <li>Two</li>
//               </ol>
//             </div>

// var user={
//   name : "Nithin",
//   age : '22',
//   location : 'london',
//   job:'Officer'
// }

// var name = "Anusha BR";
// var personAge = 20;

// var test2 = <div>
//   {/* <h1>{name.toUpperCase()}</h1>   */}
//   {/* we can refrence the var name here */}
//   {/* <p>Age : {personAge}</p> */}
//   <h1>{user.name}</h1>
//   <p>location:{user.location}</p>
//   <p>job: Software developer</p>
// </div>


function formatName(user){
  return user.firstName + " " + user.secondName;
}

var user = {
  firstName : "Jhon",
  secondName : "Doe"
};

var element = (<div>
                <h2>first name:{user.firstName}</h2>
                <h2>secondName: {user.secondName}</h2>
                <h1>{formatName(user)}</h1>
</div>);






var testroot = ReactDOM.createRoot(document.getElementById('root'));
element.render(
  element,testroot
);

