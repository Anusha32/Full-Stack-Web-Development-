import React from 'react';
import ReactDOM from 'react-dom';

let count =0;
const add = ()=>{
  count++;
  renderApp();
};
const minus = () =>{
  count--;
  renderApp();
};

const indexRoot = document.getElementById('root');


const renderApp = ()=>{
  const countingApp = (

    <div>
      <h1>
        Count : {count}
      </h1>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
    </div>


);
ReactDOM.render(countingApp,indexRoot);

};

renderApp();