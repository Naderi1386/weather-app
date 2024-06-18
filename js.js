const myButton=document.querySelector(".information__button");
const myInput=document.querySelector(".information__input");
const myCity=document.querySelector(".information__city");
const myCaption=document.querySelector(".information__caption");
const myTemperature=document.querySelector(".information__temperature");
const myWindy=document.querySelector(".information__windy");
const APIkey="3045dd712ffe6e702e3245525ac7fa38";



function turning(c){
    return (c-273.15).toFixed(2);
};

async function get_weather(){
let weather=await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myInput.value}&appid=${APIkey}`)).json();
set_info(weather);
};


// write to html
function set_info(object){
myCity.innerHTML=`city : ${object.name}`;
myCaption.innerHTML=`description : ${object.weather[0].description}` ;
let dama=object.main.temp;
// dama-=273.15;
// let finnal_dama=dama.toString();
// finnal_dama=finnal_dama.substring(0,2);
myTemperature.innerHTML=`temperature : ${turning(dama)}c`;
myWindy.innerHTML=`wind : ${object.wind.speed} knot`;



};

myButton.addEventListener("click",get_weather);