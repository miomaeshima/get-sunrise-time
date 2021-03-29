"use strict"
console.log("hi")

let lat = document.getElementById("lat");
let long = document.getElementById("long");

const success = async (pos) =>{
    let crd = pos.coords;

    console.log(`lat: ${crd.latitude}`)
    console.log(`long: ${crd.longitude}`)

    const res =  await fetch("https://api.sunrise-sunset.org/json?lat=35.6663515&lng=139.6799199+long+&date=2021-03-30");
    let data = await res.json();
    sunrise = new Date(sunrise[data.results.sunrise]);
    sunrise.setHours(sunrise.getHours()+9)
    console.log(sunrise)
}

function error(err){
    console.log(err.code)
}

navigator.geolocation.getCurrentPosition(success, error)