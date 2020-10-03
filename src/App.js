import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import DataTable from './Components/DataTable';
import { fetchAndConvertData } from './api';

function App() {
  const [columns, setColumns] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageIncrement, setPageIncrement] = useState(2);
  let bottomBoundaryRef = useRef(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const { allColumns, allRows } = await fetchAndConvertData();
      setAPIData(allRows);
      setRows([...allRows.slice(0, 20)]);
      setColumns(allColumns);
      setIsLoading(false);
    }
    getData();
  }, []);

  const scrollObserver = useCallback((node) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setPageIncrement((prevPageNumber) => prevPageNumber + 1);
        }
      });
    }).observe(node);
  }, []);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  useEffect(() => {
    setRows((prevRows) =>
      prevRows.concat(
        APIData.slice((pageIncrement - 1) * 10, pageIncrement * 10)
      )
    );
  }, [APIData, pageIncrement]);

  return (
    <div className='App'>
      {!isLoading && (
        <div>
          <DataTable columns={columns} rows={rows} onRowClick={(e) => null} onSelectionChange={(e) => null}/>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      <div
        id='page-bottom-boundary'
        style={{ border: '5px solid red' }}
        ref={bottomBoundaryRef}
      ></div>
    </div>
  );
}

export default App;
