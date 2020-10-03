import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/photos';
let allColumns = [],
  allRows = [];


async function getData() {
  let response = [];
  try {
    response = await axios.get(URL);
    allRows = response.data;
    // return response.data
  } catch (e) {
    console.log('something went wrong ', e);
  }
  return response.data;
}

function convertDataToColumns(data) {
  data.forEach((d, i) => {
    let columnData = {};
    columnData['id'] = i;
    columnData['label'] = d;
    columnData['numeric'] = i % 2 === 0 ? true : false;
    columnData['style'] = {
      width: i % 2 === 0 ? '200px' : 'auto',
      textAlign: i % 2 === 0 ? 'right' : 'left'
    };
    allColumns.push(columnData);
  });
  return allColumns;
}

export async function fetchAndConvertData() {
  const data = await getData();
  allColumns = convertDataToColumns(Object.keys(data[0]));
  return { allColumns, allRows };
}
