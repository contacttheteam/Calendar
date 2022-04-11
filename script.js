const years = document.getElementById("year");
const months = document.getElementById("month");
const days = document.getElementById("day");
const dayPlusBtn = document.getElementById("day-plus");
const dayMinusBtn = document.getElementById("day-minus");
const message = document.getElementById("message");
const messageDate = document.getElementById("message-date");

let day = "";
let month = "";
let year = "";
let url = "";

dayPlusBtn.addEventListener('click', getTomorrow);
dayMinusBtn.addEventListener('click', getYesterday);

function getTomorrow() {
     const tomorrow = new Date();
     tomorrow.setDate(tomorrow.getDate() + 1);
     day = tomorrow.getDate();
     month = tomorrow.getMonth();
     year = tomorrow.getFullYear();
     dateString = tomorrow.toString();
     years.innerHTML = year;
     months.innerHTML = dateString.split(" ")[1];
     days.innerHTML = day;
     url = `https://byabbe.se/on-this-day/${month + 1}/${day}/events.json`;
     getApiData();
}

function getYesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() -  1);
    day = yesterday.getDate();
    month = yesterday.getMonth();
    year = yesterday.getFullYear();
    dateString = yesterday.toString();
    years.innerHTML = year;
    months.innerHTML = dateString.split(" ")[1];
    days.innerHTML = day;
    url = `https://byabbe.se/on-this-day/${month + 1}/${day}/events.json`;
    getApiData();
}

function getDate() {
    const today = new Date();
    day = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();
    dateString = today.toString();
    years.innerHTML = year;
    months.innerHTML = dateString.split(" ")[1];
    days.innerHTML = day;
    url = `https://byabbe.se/on-this-day/${month + 1}/${day}/events.json`;
    getApiData();
}

function getApiData() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let dataLength = data.events.length;
            let randomNumber = Math.floor(Math.random() * dataLength);
            console.log(dataLength + "; " + randomNumber);
            console.log(data);
            messageDate.innerHTML = `On the ${day}/${month + 1}/${data.events[randomNumber].year}`;
            message.innerHTML = data.events[randomNumber].description ;
        });
}

getDate();