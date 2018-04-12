import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';///////////
const CITIES = [
{ name: "Москва", temp: "20", humidity: "60" },
{ name: "Париж", temp: "25", humidity: "50"  },
{ name: "Рим", temp: "22", humidity: "40"  },
{ name: "Токио", temp: "21", humidity: "50"  }
];

var ind = 0;
var find = '';
var favor = -1;

const CitiesItem = () => (	
<select onChange   = {() =>
   {	ind = document.getElementById("mySelect").selectedIndex; 
   ReactDOM.render(
   <App />
   , document.getElementById('root'));///////////////
   }}   id="mySelect">
   {CITIES.map((place, index) => (
   <option key={index}>
      {place.name}
   </option>
   ))}
</select>
);

const CityInfo = (props) => (
<div>
   <h2>
      Город {CITIES[props.i].name}
   </h2>
   <h3>
      Температура {CITIES[props.i].temp}
   </h3>
   <h3>
      Влажность {CITIES[props.i].humidity}
   </h3>
</div>
);

const findCity = () => {find = document.getElementById("myFind").value; 
for (var i = 0; i < CITIES.length; i++) {
if (find === CITIES[i].name) {ind = i; ReactDOM.render(
<App />
, document.getElementById('root'));
break;} 
}
};

const FavorCity = () => {
if (favor == -1)
return (
<div>	
</div>
); else 
return (
<div>	
   {CITIES[favor].name}
</div>
)
};

const favStyle = {
fontSize: '14px',
color: 'red'
};



class App extends Component {
render (){
return (
<div className="App">
   <table width="100%" border = "1">
      <tr>
         <td>
            <header className="App-header">
               <title>Weather Site</title>
               <h1>Погода</h1>
               <input type="text" size="40" id="myFind"/>
               <button onClick = {findCity} > Поиск </button>
               <p>
                  <CitiesItem />
               </p>
            </header>
         </td>
      </tr>
      <tr>
         <td>
            <h2>Прогноз погоды</h2>
            <h3>
               <CityInfo i = {ind}/>
            </h3>
            <button onClick = {() =>
               {
               favor = ind;
               ReactDOM.render(
               <App />
               , document.getElementById('root'));  ////////////////////
               }}> Добавить в избранное 
            </button>
            <div onClick = {()=>
               {if (favor != -1) ind = favor;
               ReactDOM.render(
               <App />
               , document.getElementById('root'));/////////////////
               }}>
               <p style = {favStyle}>
                  <FavorCity  />
               </p>
            </div>
         </td>
      </tr>
   </table>
</div>
);
}}
export default App;