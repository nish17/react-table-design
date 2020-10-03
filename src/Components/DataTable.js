import React from 'react';
import '../App.css';

export default function DataTable({ columns, rows }) {
  const renderTableHeader = () => {
    return columns.map((col, i) => (
      <th key={i} style={col.style}>
        {col.label.toUpperCase()}
      </th>
    ));
  };

  const renderTableBody = () => {
    return rows.map((row, i) => (
      <tr key={i} style={{ height: '160px' }}>
        <td>{row.albumId}</td>
        <td>{row.id}</td>
        <td>{row.title}</td>
        <td>
          <a href={row.url}>{row.url}</a>
        </td>
        <td>
          <img src={row.thumbnailUrl} alt='img' />
        </td>
      </tr>
    ));
  };

  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
}
