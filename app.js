let vCity = "";
let vCountry = "";
const cUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const cApiKey = "&appid=1b3ddbf81283fb3ddf71b512577d05b2";
const cImgUrl = "http://openweathermap.org/img/w/";
let vWDescription = "";
let vWIconId = "";
let vTemp = "";
let v
let vData = [];

console.log(vCity);
console.log(vCountry);
console.log(cUrl);
console.log(cApiKey);

// when user clicks on the get weather button, we'll get the value from input fields for city and country
document.getElementById('bt_weather').addEventListener('click', (e) => {
  e.preventDefault();
  vCity = document.getElementById('inp_city').value;
  vCountry = document.getElementById('inp_country').value;

  console.log(vCity);
  console.log(vCountry);
  console.log(cUrl);
  console.log(cApiKey);

  console.log(`${cUrl}${vCity},${vCountry}${cApiKey}&units=metric`)

  // calling the API
  fetch(`${cUrl}${vCity},${vCountry}${cApiKey}&units=metric`)

  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    vWDescription = data.weather[0].description
    vWIconId = data.weather[0].icon
    vTemp = data.main.temp
    console.log(data.weather[0].description)
    console.log(data.weather[0].icon)
    console.log(data.main.temp)
    // vData.push(data)
    showWeather();

  })
  .catch((e) => console.log(e, "You got an error"))

})

function showWeather() {
  document.getElementById('display').innerHTML = '<h2>'+vCity+', '+vCountry+'</h2><p>Current weather is '+vWDescription+' and temperature is '+vTemp+' degrees Celsius.</p><p><img src="'+cImgUrl+vWIconId+'.png"></p>';
}













