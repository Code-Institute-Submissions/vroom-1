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
    })
    .catch((err) => {
      console.error(err);
    });
}

let endPointDR = `rankings/drivers?season=2021`;
callAPI(endPointDR);

let endPointTeams = `teams`;
callAPI(endPointTeams);

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