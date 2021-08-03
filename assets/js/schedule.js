// create variable to check whether data from two different APIs has been stored to local storage
let racesFetched = localStorage.getItem("racesFetched") ? true : false;
let tracksFetched = localStorage.getItem("tracksFetched") ? true : false;

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
    getRaceTrack();
}

// call 1st API to get track names and images
function getRaceTrack() {
    fetch(`https://api-formula-1.p.rapidapi.com/circuits?`, {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "0976a2e9aemsh7e7a4e1e87da560p10b7a1jsnf97cc271f7ab",
            "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        },
    })
        .then(async (res) => {
            let trackResult = await res.json();
            let details = trackResult.response;

            localStorage.setItem(`tracks`, JSON.stringify(details));
            localStorage.setItem("tracksFetched", true);
            console.log("tracks stored");
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
        addRound();
        add1RoundData("raceName", "name");
        add2RoundData("dateCountry", "end_date", "country");
        addSessionTimes("raceData", 7);
        addSessionTimes("qualifyingData", 3);
        addSessionTimes("p3Data", 2);
        addSessionTimes("p2Data", 1);
        addSessionTimes("p1Data", 0);
    });
}

// local variables
const data = JSON.parse(localStorage.getItem("allRaces"));
const tracks = JSON.parse(localStorage.getItem("tracks"));
const races = [];
let queryResults = [];
let sessionData = [];

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
    sessionData = [];
}

function getData(query) {
    // empty array that holds query data to prevent wrong data being accessed
    clearData();
    for (const entry of races) {
        // use bracket notation to prevent errors for queries unsuited for dot notation
        let queryResult = entry[query];
        queryResults.push(queryResult);
    }
    return queryResults;
}

function addRound() {
    for (let i = 0; i < races.length; i++) {
        let numberOfRound = document.getElementsByClassName("roundNumber");
        numberOfRound[i].innerText = `Round ${i + 1}`;
    }
}

function add1RoundData(className, query) {
    for (let i = 0; i < races.length; i++) {
        let element = document.getElementsByClassName(className);
        element[i].innerText = `${getData(query)[i]}`;
    }
}

function add2RoundData(className, query1, query2) {
    for (let i = 0; i < races.length; i++) {
        let element = document.getElementsByClassName(className);
        element[i].innerText = `${getData(query1)[i]} ${getData(query2)[i]}`;
    }
}

function getSessionDetails(sessionNumber) {
    clearData();
    for (const entry of races) {
        let sessionDetails = `${entry.sessions[sessionNumber].date.slice(
            0,
            10
        )} ${entry.sessions[sessionNumber].date.slice(11, 19)}`;

        sessionData.push(sessionDetails);
    }
    return sessionData;
}

function addSessionTimes(session, sessionNumber) {
    for (let i = 0; i < races.length; i++) {
        let test = document.getElementsByClassName(`${session}`);
        test[i].innerText = `${
            session[0].toUpperCase() + session.substr(1).slice(0, -4)
        } starts at
    ${getSessionDetails(sessionNumber)[i]}`;
    }
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
console.log(tracks);
