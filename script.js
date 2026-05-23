const apiKey =
"d70bbbafad019e2296a7b5d980efaa2a";

async function getWeather(){

const city =
document.getElementById(
"cityInput"
).value.trim();

const weatherResult =
document.getElementById(
"weatherResult"
);

if(city === ""){

weatherResult.innerHTML =
"<p>Bitte Stadt eingeben.</p>";

return;
}

weatherResult.innerHTML =
"<p>Lade Wetterdaten...</p>";

try{

const response =
await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`

);

const data =
await response.json();

console.log(data);

if(data.cod != 200){

weatherResult.innerHTML =
"<p>Stadt nicht gefunden.</p>";

return;
}

weatherResult.innerHTML =

`
<h2>
${data.name}
</h2>

<p>
🌡️ Temperatur:
${Math.round(data.main.temp)}°C
</p>

<p>
☁️ Wetter:
${data.weather[0].description}
</p>

<p>
💧 Luftfeuchtigkeit:
${data.main.humidity}%
</p>

<p>
💨 Wind:
${data.wind.speed} km/h
</p>
`;

}

catch(error){

weatherResult.innerHTML =
"<p>Fehler beim Laden.</p>";

console.log(error);

}

}

console.log(
"Weather App loaded 🌦️"
);
