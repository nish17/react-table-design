import React from 'react';
import './App.css';
import DataTable from './Components/DataTable';
import {rows, columns} from './dummyData';


function App() {
  return (
    <div className="App">
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}

export default App;
