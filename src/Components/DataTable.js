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
        <td>{row.id}</td>
        <td>{row.product}</td>
        <td>{row.price}</td>
        <td>{row.id + 1}</td>
        <td>{row.id + 2}</td>
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
