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

let dataFetched = localStorage.getItem("dataFetched") ? true : false;

async function callAPI() {
<<<<<<< HEAD
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
displayTeamStanding();
=======
    // iterate Map with for..of to get data from each endpoint
    for (let [key, value] of endpoints) {
        fetch(`https://api-formula-1.p.rapidapi.com/${value}`, {
            method: "GET",
            headers: {
                "x-rapidapi-key":
                    "0976a2e9aemsh7e7a4e1e87da560p10b7a1jsnf97cc271f7ab",
                "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
            },
        })
            .then(async (response) => {
                let result = await response.json();
                let data = result.response;
                // save to localStorage to avoid name conflicts
                // because several endpoints have  attributes 'name', 'points', 'position' etc.
                localStorage.setItem(`${key}`, JSON.stringify(data));
                localStorage.setItem("dataFetched", true);
                // add reload to fill tables with data
                location.reload();
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

// prevent unecessary API calls
if (!localStorage.getItem("dataFetched")) {
    callAPI();
} else {
    // only call these functions after data has been fetched
    document.addEventListener("DOMContentLoaded", () => {
        displayDriverStanding();
        displayTeamStanding();
    });
}
>>>>>>> dfe632a (major fix: prevent user from having to reload page to see content)

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
    cellDriver.addEventListener("click", moreInfo);
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

function displayTeamStanding() {
  addTeamPositions();
  addConstructors();
  addTeamPoints();
}

// show modal with details for selected driver
function moreInfo() {
  var driverModal = new bootstrap.Modal(document.getElementById("moreInfo"), {
    keyboard: true,
    focus: true,
    backdrop: true,
  });
  let name = this.innerHTML;
  searchDriver(name);
  console.log(JSON.parse(localStorage.getItem(`${name}`)));

  driverModal.show();
}

// get driver info and save data for modal to localStorage
function searchDriver(name) {
  fetch(`https://api-formula-1.p.rapidapi.com/drivers?search=${name}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0976a2e9aemsh7e7a4e1e87da560p10b7a1jsnf97cc271f7ab",
      "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
    },
  })
    .then(async (res) => {
      let newResult = await res.json();
      let details = newResult.response;

      localStorage.setItem(`${name}`, JSON.stringify(details));
      let driverDetails = JSON.parse(localStorage.getItem(`${name}`));
      let imageURL = driverDetails[0].image;
      let fullname = driverDetails[0].name;
      let driverNationality = driverDetails[0].nationality;
      let birthdate = driverDetails[0].birthdate;
      let modalHeading = fullname;
      let bDay = `Birthdate: ${birthdate}`;
      let nat = `Nationality: ${driverNationality}`;
      writeToModal(modalHeading, bDay, nat, imageURL);
    })
    .catch((err) => {
      console.error(err);
    });
}

function writeToModal(name, date, nationality, photo) {
  let modalHeading = document.getElementById("fullName");
  let heading = document.getElementById("moreInfoLabel");
  heading.innerHTML = name;
  modalHeading.prepend(heading);

  let modalBody = document.getElementById("driverDetails");
  let detail1 = document.getElementById("dateOfBirth");
  detail1.innerHTML = date;
  modalBody.append(detail1);
  let detail2 = document.getElementById("driverNationality");
  detail2.innerHTML = nationality;
  modalBody.append(detail2);

  let driverPhoto = document.getElementById("pic");
  $("#pic").attr("src", photo);
  modalBody.append(driverPhoto);
}

// TODO: make functions for driverstandings acccept parameters to be usable for teamstandings!

// retrieve team positions from localStorage and store in array
function getTeamPosition() {
  let teamPosition = [];
  let constructorRankings = JSON.parse(
    localStorage.getItem("constructorRankings")
  );
  constructorRankings.forEach(function (element) {
    let pos = element.position;
    teamPosition.push(pos);
  });
  return teamPosition;
}

// retrieve teams from localStorage and store in array
function getConstructor() {
  let constructors = [];
  let constructorRankings = JSON.parse(
    localStorage.getItem("constructorRankings")
  );
  constructorRankings.forEach(function (element) {
    let team = element.team.name;
    constructors.push(team);
  });
  return constructors;
}

// retrieve points from localStorage and store in array
function getTeamPoints() {
  let teamPoints = [];
  let constructorRankings = JSON.parse(
    localStorage.getItem("constructorRankings")
  );
  constructorRankings.forEach(function (element) {
    let teamPoint = element.points;
    teamPoints.push(teamPoint);
  });
  return teamPoints;
}

// add teampositions to table
function addTeamPositions() {
  const tableTeamStandings = document.getElementById("teamStandings");
  const bodyTeamStandings = document.getElementById("tbTeamStandings");

  let position = getTeamPosition();
  position.forEach(function (number) {
    //create row and give it an ID
    let row = document.createElement("tr");
    row.id = "teamEntry";
    // create cells, fill them with values from array and append to row
    let cellPos = document.createElement("td");
    cellPos.innerHTML = number;
    row.appendChild(cellPos);
    // append row to table body
    bodyTeamStandings.appendChild(row);
  });

  // append table body to table
  tableTeamStandings.appendChild(bodyTeamStandings);
}

// add teams to table
function addConstructors() {
  const tableTeamStandings = document.getElementById("teamStandings");
  const bodyTeamStandings = document.getElementById("tbTeamStandings");

  let constructors = getConstructor();
  constructors.forEach((constructor) => {
    let row = document.getElementById("teamEntry");
    let cellConstructor = document.createElement("td");
    cellConstructor.innerHTML = constructor;
    row.appendChild(cellConstructor);
    bodyTeamStandings.appendChild(row);
  });
  tableTeamStandings.appendChild(bodyTeamStandings);
}

// add teampoints to table
function addTeamPoints() {
  const tableTeamStandings = document.getElementById("teamStandings");
  const bodyTeamStandings = document.getElementById("tbTeamStandings");

  let teamPoints = getTeamPoints();
  teamPoints.forEach((teamPoint) => {
    let row = document.getElementById("teamEntry");
    let cellTeampoints = document.createElement("td");
    cellTeampoints.innerHTML = teamPoint;
    row.appendChild(cellTeampoints);
    bodyTeamStandings.appendChild(row);
  });
  tableTeamStandings.appendChild(bodyTeamStandings);
}
