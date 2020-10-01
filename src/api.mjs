import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/photos';

export default async function getData () {
  let response = [];
  try {
    response = await axios.get(URL);
    // console.log(response);
  }catch(e){
    console.log('something went wrong ', e);
  };
  return response.data;
}

async function fetchAndConvertData(){
  const data = await getData();
  console.log(Object.keys(data));
}

fetchAndConvertData();