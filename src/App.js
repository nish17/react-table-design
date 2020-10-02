import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import DataTable from './Components/DataTable';
import { fetchAndConvertData } from './api';

function App() {
  const [columns, setColumns] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageIncrement, setPageIncrement] = useState(1);
  let bottomBoundaryRef = useRef(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const { allColumns, allRows } = await fetchAndConvertData();
      setAPIData(allRows);
      // setRows(allRows)
      setRows([...allRows.slice(0,10)])
      // setRows(prevRows => [...prevRows, ...APIData.slice(((pageIncrement-1)*10), (pageIncrement*10))]);
      setColumns(allColumns);
      setIsLoading(false);
    }
    getData();
  }, []);

  const scrollObserver = useCallback((node) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPageIncrement((prevPageNumber) => prevPageNumber + 1);
          setRows(prevRows => [...prevRows, ...APIData.slice(((pageIncrement-1)*10), (pageIncrement*10))]);
        }
      });
    }).observe(node);
  }, [APIData,pageIncrement]);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  return (
    <div className='App'>
      {!isLoading && (
        <div>
          <DataTable columns={columns} rows={rows} />
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      <div
        id='page-bottom-boundary'
        style={{ border: '1px solid red' }}
        ref={bottomBoundaryRef}
      ></div>
    </div>
  );
}

export default App;
