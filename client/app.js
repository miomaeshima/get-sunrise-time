"use strict";
console.log("hi");

let lat = document.getElementById("lat");
let long = document.getElementById("long");
let sunriseTime = document.getElementById("sunriseTime");

const success = async (pos) => {
    let crd = pos.coords;
    
    console.log(`lat: ${crd.latitude}`);
    lat.innerHTML = `lat: ${crd.latitude}`;
    console.log(`long: ${crd.longitude}`);
    long.innerHTML = `long: ${crd.longitude}`;
  
    

  const res = await fetch(
    "https://api.sunrise-sunset.org/json?lat=35.6663515&lng=139.6799199+long+&date=2021-04-30"
  );
  let data = await res.json();
  let sunrise = data.results.sunrise;
  let utcHour = sunrise.substring(0, sunrise.indexOf(":"));
  console.log(utcHour);
  let minutes = sunrise.substring(
    sunrise.indexOf(":") + 1,
    sunrise.indexOf(":") + 3
  );
  console.log(minutes);
  let sunriseJST = `${utcHour - 3}:${minutes}`;
  console.log(sunriseJST);
  sunriseTime.innerHTML = `Sun rises at ${sunriseJST}`
};

function error(err) {
  console.log(err.code);
}

navigator.geolocation.getCurrentPosition(success, error);
