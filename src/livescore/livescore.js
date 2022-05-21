import axios from "axios";



function Axios() {
const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
  }
};
return(
 
  axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
 
}));



}


export default Axios