import React, { useEffect, useState } from 'react';
import './App.css';
import DataTable from './Components/DataTable';
// import {rows, columns} from './dummyData';
import { fetchAndConvertData } from './api';

function App() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const { allColumns, allRows } = await fetchAndConvertData();
      console.log('rows: ', allRows);
      console.log('columnsL ', allColumns);
      setRows(allRows);
      setColumns(allColumns);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <div className='App'>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <DataTable columns={columns} rows={rows} />}
    </div>
  );
}

export default App;
