async function callAPI(endPoint) {
  fetch(`https://api-formula-1.p.rapidapi.com/${endPoint}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '0976a2e9aemsh7e7a4e1e87da560p10b7a1jsnf97cc271f7ab',
      'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
    },
  })
    .then(async (response) => {
      let result = await response.json();
      let data = result.response;
      console.log(data);
      displayDriverStanding(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

// DRIVER RANKINGS
let endPointDR = `rankings/drivers?season=2021`;
callAPI(endPointDR);

// retrieve positions from response and store in array
function getPosition(data) {
  let position = [];
  data.forEach(function (element) {
    let pos = element.position;
    position.push(pos);
  });
  return position;
}

// add Driverpositions to table
function addPositions(data) {
  const tableDriverStandings = document.getElementById('driverStandings');
  const bodyDriverStandings = document.getElementById('tbDriverStandings');

  position = getPosition(data);
  // loop through array and exclude positions for teams with data.length === 10
  if (data.length === 20) {
    position.forEach(function (number) {
      //create row and give it an ID
      let row = document.createElement('tr');
      row.id = 'entry';
      // create cells, fill them with values from array and append to row
      let cellPos = document.createElement('td');
      cellPos.innerHTML = number;
      row.appendChild(cellPos);
      // append row to table body
      bodyDriverStandings.appendChild(row);
    });
  }
  // append table body to table
  tableDriverStandings.appendChild(bodyDriverStandings);
}

// TEAM RANKINKS
let endPointTeams = `rankings/teams?season=2021`;
callAPI(endPointTeams);

// SCHEDULE OVERVIEW
const time = Date.now();
const today = new Date(time);
let dateForCall = today.toISOString().slice(0, 10);
console.log(dateForCall);
let endPointCurrRace = `races?season=2021&date=${dateForCall}`;
callAPI(endPointCurrRace);
let endPointPrevRace = `races?type=race&season=2021&last=1`;
callAPI(endPointPrevRace);
let endPointNextRace = `races?type=race&season=2021&next=1`;
callAPI(endPointNextRace);

function displayDriverStanding(data) {
  addPositions(data);
}