// define endpoints for API call and add to Map
const endpoints = new Map();
const endPointDR = `rankings/drivers?season=2021`;
endpoints.set("racerRankings", `${endPointDR}`);
const endPointTeams = `rankings/teams?season=2021`;
endpoints.set("constructorRankings", `${endPointTeams}`);
const time = Date.now();
const today = new Date(time);
let dateForCall = today.toISOString().slice(0, 10);
const endPointCurrRace = `races?season=2021&date=${dateForCall}`;
endpoints.set("currentRace", `${endPointCurrRace}`);
const endPointPrevRace = `races?type=race&season=2021&last=1`;
endpoints.set("prevRace", `${endPointPrevRace}`);
const endPointNextRace = `races?type=race&season=2021&next=1`;
endpoints.set("nextRace", `${endPointNextRace}`);

async function callAPI() {
  // iterate Map with for..of to get data from each endpoint
  for (let [key, value] of endpoints) {
    fetch(`https://api-formula-1.p.rapidapi.com/${value}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0976a2e9aemsh7e7a4e1e87da560p10b7a1jsnf97cc271f7ab",
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
      },
    })
      .then(async (response) => {
        let result = await response.json();
        let data = result.response;
        // save to localStorage to avoid name conflicts
        // because several endpoints have  attributes 'name', 'points', 'position' etc.
        localStorage.setItem(`${key}`, JSON.stringify(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

displayDriverStanding();

// retrieve positions from localStorage and store in array
function getDriverPosition() {
  let position = [];
  let racerRankings = JSON.parse(localStorage.getItem("racerRankings"));
  racerRankings.forEach(function (element) {
    let pos = element.position;
    position.push(pos);
  });
  return position;
}

// retrieve drivers from localStorage and store in array
function getDriver() {
  let drivers = [];
  let racerRankings = JSON.parse(localStorage.getItem("racerRankings"));
  racerRankings.forEach(function (element) {
    let driver = element.driver.name;
    drivers.push(driver);
  });
  return drivers;
}

// retrieve points from localStorage and store in array
function getDriverPoints() {
  let points = [];
  let racerRankings = JSON.parse(localStorage.getItem("racerRankings"));
  racerRankings.forEach(function (element) {
    let driverPoints = element.points;
    points.push(driverPoints);
  });
  return points;
}

// retrieve teams from localStorage and store in array
function getTeam() {
  let teams = [];
  let racerRankings = JSON.parse(localStorage.getItem("racerRankings"));
  racerRankings.forEach((element) => {
    let team = element.team.name;
    teams.push(team);
  });
  return teams;
}

// add Driverpositions to table
function addPositions() {
  const tableDriverStandings = document.getElementById("driverStandings");
  const bodyDriverStandings = document.getElementById("tbDriverStandings");

  let position = getDriverPosition();
  position.forEach(function (number) {
    //create row and give it an ID
    let row = document.createElement("tr");
    row.id = "entry";
    // create cells, fill them with values from array and append to row
    let cellPos = document.createElement("td");
    cellPos.innerHTML = number;
    row.appendChild(cellPos);
    // append row to table body
    bodyDriverStandings.appendChild(row);
  });

  // append table body to table
  tableDriverStandings.appendChild(bodyDriverStandings);
}

// add drivers to table (for steps see comments in addPositions function)
function addDrivers() {
  const tableDriverStandings = document.getElementById("driverStandings");
  const bodyDriverStandings = document.getElementById("tbDriverStandings");

  let drivers = getDriver();
  drivers.forEach(function (name) {
    let row = document.getElementById("entry");
    let cellDriver = document.createElement("td");
    cellDriver.innerHTML = name;
    cellDriver.id = name.split(" ")[1];
    row.appendChild(cellDriver);
    bodyDriverStandings.appendChild(row);
  });
  tableDriverStandings.appendChild(bodyDriverStandings);
}

// add points to table (for steps see comments in addPositions function)
function addPoints() {
  const tableDriverStandings = document.getElementById("driverStandings");
  const bodyDriverStandings = document.getElementById("tbDriverStandings");

  let points = getDriverPoints();
  points.forEach(function (point) {
    let row = document.getElementById("entry");
    let cellPoints = document.createElement("td");
    cellPoints.innerHTML = point;
    row.appendChild(cellPoints);
    bodyDriverStandings.appendChild(row);
  });
  tableDriverStandings.appendChild(bodyDriverStandings);
}

// add teams to table (for steps see comments in addPositions function)
function addTeams() {
  const tableDriverStandings = document.getElementById("driverStandings");
  const bodyDriverStandings = document.getElementById("tbDriverStandings");

  let teams = getTeam();
  teams.forEach((teamName) => {
    let row = document.getElementById("entry");
    let cellTeam = document.createElement("td");
    cellTeam.innerHTML = teamName;
    cellTeam.id = "hideOnMobile";
    row.appendChild(cellTeam);
    bodyDriverStandings.appendChild(row);
  });
  tableDriverStandings.appendChild(bodyDriverStandings);
}

console.log(endpoints);
console.log(JSON.parse(localStorage.getItem("racerRankings")));
console.log(JSON.parse(localStorage.getItem("constructorRankings")));
console.log(JSON.parse(localStorage.getItem("nextRace")));
console.log(JSON.parse(localStorage.getItem("currentRace")));
console.log(JSON.parse(localStorage.getItem("prevRace")));

function displayDriverStanding() {
  addPositions();
  addDrivers();
  addPoints();
  addTeams();
}
