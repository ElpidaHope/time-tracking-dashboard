let myRequest = new Request("./data.json");

let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

let currentDuration = document.querySelectorAll(".duration h2");
let previousDuration = document.querySelectorAll(".duration p");

fetch(myRequest)
    .then(response => response.json())
    .then(data => {
       
        data.map((activity,i) => {
            daily.addEventListener("click", () => {
                currentDuration[i].innerHTML = activity.timeframes.daily.current <= 1 ? `${activity.timeframes.daily.current}hr`: `${activity.timeframes.daily.current}hrs`;
                
                previousDuration[i].innerHTML = activity.timeframes.daily.previous <= 1 ? `Yesterday - ${activity.timeframes.daily.current}hr`: `Yesterday - ${activity.timeframes.daily.previous}hrs`; 
            })

            weekly.addEventListener("click", () => {
                currentDuration[i].innerHTML = `${activity.timeframes.weekly.current}hrs`;
                previousDuration[i].innerHTML = `Last Week - ${activity.timeframes.weekly.previous}hrs`;
            })

            monthly.addEventListener("click", () => {
                currentDuration[i].innerHTML = `${activity.timeframes.monthly.current}hrs`;
                previousDuration[i].innerHTML = `Last Month - ${activity.timeframes.monthly.previous}hrs`;
            })
            })
        })
    
