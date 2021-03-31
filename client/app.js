"use strict";

let lat = document.getElementById("lat");
let long = document.getElementById("long");
let sunriseTime = document.getElementById("sunriseTime");
let chooseDate = document.getElementById("chooseDate")
let dateInput = document.getElementById("dateInput");
let place = document.getElementById("place");

let chosenDate

dateInput.style.visibility = "hidden"

const success = (pos) => {
    let crd = pos.coords;
    place.innerHTML = "この場所は"
    lat.innerHTML = `緯度：${crd.latitude}度`;
    long.innerHTML = `経度：${crd.longitude}度`;  
    chooseDate.innerHTML = "次は日を選んでね。日の出時間を調べるよ。";
    dateInput.style.visibility = "visible";     
};

function error(err) {
    console.log(err.code);
}

navigator.geolocation.getCurrentPosition(success, error);


dateInput.addEventListener("change", async (e) => {
    chosenDate = e.target.value;
    chooseDate.innerHTML = "";
    dateInput.style.visibility = "hidden";
    
    const res = await fetch(        
        `https://api.sunrise-sunset.org/json?lat=35.6663515&lng=139.6799199+long+&date=${chosenDate}`
        );
        let data = await res.json();
        let sunrise = data.results.sunrise;
        let utcHour = sunrise.substring(0, sunrise.indexOf(":"));
        let minutes = sunrise.substring(
            sunrise.indexOf(":") + 1,
            sunrise.indexOf(":") + 3
            );
        let sunriseJST = `${utcHour - 3}:${minutes}`;
        sunriseTime.innerHTML = `この場所の${chosenDate}の日の出時間は${sunriseJST}です。`;
});