// create variable to check whether data from API has been stored to local storage
let racesFetched = localStorage.getItem("racesFetched") ? true : false;

// call 2nd API to get the full schedule with one API call
async function getFullSchedule() {
    fetch("https://f1-live-motorsport-data.p.rapidapi.com/races/2021", {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "0976a2e9aemsh7e7a4e1e87da560p10b7a1jsnf97cc271f7ab",
            "x-rapidapi-host": "f1-live-motorsport-data.p.rapidapi.com",
        },
    })
        .then(async (response) => {
            let result = await response.json();
            localStorage.setItem(`allRaces`, JSON.stringify(result));
            localStorage.setItem("racesFetched", true);
            // add reload to ensure that data is available for functions
            location.reload();
        })
        .catch((err) => {
            console.error(err);
        });
}

// prevent unecessary API calls
if (!localStorage.getItem("racesFetched")) {
    getFullSchedule();
} else {
    // only call these functions after data has been fetched
    document.addEventListener("DOMContentLoaded", () => {
        // add functions here
        removeCancelledRaces();
    });
}

// local variables
const data = JSON.parse(localStorage.getItem("allRaces"));
const races = [];
let queryResults = [];

// local functions
function removeCancelledRaces() {
    for (const entry of data.results) {
        let status = entry.status;
        if (
            (!races.includes(entry) && status === "Complete") ||
            (!races.includes(entry) && status === "Confirmed")
        ) {
            races.push(entry);
        }
    }
    return races;
}

function clearData() {
    queryResults = [];
}

function getData(query) {
    clearData();
    for (const entry of races) {
        let queryResult = entry[query];
        queryResults.push(queryResult);
    }
    return queryResults;
}

// elements
const round = document.getElementById("round1");
const scheduleContainer = document.getElementById("fullSchedule");

// clone element with three cards for round 1 for rounds 2 - 23 and update ID
for (let i = 2; i < 23; i++) {
    let cardsClone = round.cloneNode(true);
    cardsClone.id = `round${i}`;
    scheduleContainer.appendChild(cardsClone);
}

// console.logs: remove before submitting!
//console.log(data);
console.log(races);
