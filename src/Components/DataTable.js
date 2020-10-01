import React from 'react';

export default function DataTable({ columns, rows }) {
  const renderTableHeader = () => {
    return columns.map((col, i) => (
      <th key={i} style={col.style}>
        {col.label}
      </th>
    ));
  };

  const renderTableBody =() => {
    return rows.map((row, i) => (
      <tr>
        <td>{row.albumId}</td>
        <td>{row.id}</td>
        <td>{row.title}</td>
        <td>{row.url}</td>
        <td>{row.thumbnailUrl}</td>
      </tr>
    ))
  }

  return (
    <div>
      Hello
      <table>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>
          {renderTableBody()}
        </tbody>
      </table>
    </div>
  );
}
