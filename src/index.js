import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Harsh"
const lname = "More"
ReactDOM.render(
  <>
    <h1>{`My name is ${fname}  ${lname}.`} </h1>
    <p> Hello {} </p>
  </>,
  document.getElementById('root')
);
