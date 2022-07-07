let info = prompt("lütfen isim giriniz");

let inputName = document.querySelector("#myName");

inputName.innerHTML = info;

function addString(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}

function showTime() {
    let date = new Date();
    let hoursValue = date.getHours();

    let minutesValue = date.getMinutes();

    let secondsValue = date.getSeconds();

    let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];

    hoursValue = addString(hoursValue);
    minutesValue = addString(minutesValue);
    secondsValue = addString(secondsValue);

    document.getElementById("myClock").innerHTML =
        hoursValue +
        ":" +
        minutesValue +
        ":" +
        secondsValue +
        " " +
        days[date.getDay()];
}

setInterval(showTime, 1000);
