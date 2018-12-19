'use strict';

console.log("App.js is running!!");
/*var d = (
  <div>
    <h1 id="gafffu">Mochuaa !!</h1>
    <p>some info</p>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
  </div>);
 var d = React.createElement(
    "p",
    { id: "gaffu" },
    "Jai Gappar"
  ); */

var name = 'Gappar Ali khan Pataudi';
var user = { 'name': name, 'age': 30, 'location': 'Namma Bengaluru' };
var d = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age:',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location:',
    user.location
  )
);
var appRoot = document.getElementById("root");
ReactDOM.render(d, appRoot);
