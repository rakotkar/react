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


var name='Gappar Ali khan Pataudi';
var user={'name':name ,'age':30,'location':'Namma Bengaluru'};  
var d = (<div>
  <h1>{user.name.toUpperCase()}</h1>
  <p>Age:{user.age}</p>
  <p>Location:{user.location}</p>
</div>)
  var appRoot = document.getElementById("root");
  ReactDOM.render(d, appRoot);