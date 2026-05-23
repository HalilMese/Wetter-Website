const apiKey =
"DEIN_API_KEY_HIER";

async function getWeather(){

const city =

document.getElementById(
"cityInput"
).value;

const weatherResult =

document.getElementById(
"weatherResult"
);

if(city === ""){

weatherResult.innerHTML =

`
<p>
Bitte Stadt eingeben.
</p>
`;

return;

}

try{

const response =

await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`

);

const data =
await response.json();

if(data.cod === "404"){

weatherResult.innerHTML =

`
<p>
Stadt nicht gefunden.
</p>
`;

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

`
<p>
Fehler beim Laden.
</p>
`;

}

}

console.log(
"Weather App loaded 🌦️"
);
