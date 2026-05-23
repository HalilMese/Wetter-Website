const apiKey =
"d70bbbafad019e2296a7b5d980efaa2a";

const cities = [

{
name:"Berlin",
id:"berlin"
},

{
name:"London",
id:"london"
},

{
name:"Tokyo",
id:"tokyo"
},

{
name:"Istanbul",
id:"istanbul"
},

{
name:"New York",
id:"newyork"
}

];

async function loadWeather(){

cities.forEach(async city => {

try{

const response =
await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric&lang=de`

);

const data =
await response.json();

document.getElementById(
city.id
).innerHTML =

`
<h2>
${data.name}
</h2>

<p>
🌡️ ${Math.round(data.main.temp)}°C
</p>

<p>
☁️ ${data.weather[0].description}
</p>

<p>
💧 ${data.main.humidity}%
</p>
`;

}

catch(error){

document.getElementById(
city.id
).innerHTML =

`
<p>
Fehler beim Laden
</p>
`;

}

});

}

loadWeather();

console.log(
"Global Weather Dashboard loaded 🌍"
);
