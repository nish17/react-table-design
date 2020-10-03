import React, { useState } from 'react';
import '../App.css';

export default function DataTable({ columns, rows, onRowClick }) {
  const [checkedIds, setCheckedIds] = useState([]);
  const [checkBox, setCheckBox] = useState(false);

  const renderTableHeader = () => {
    return columns.map((col, i) => (
      <th key={i} style={col.style}>
        {col.label.toUpperCase()}
      </th>
    ));
  };

  const handleSingleCheckBoxClick = (event, id) => {
    if (event.target.checked) {
      setCheckedIds((prevIds) => prevIds.concat(id));
    } else {
      setCheckedIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
    }
  };

  const handleAllCheckBoxClick = (event) => {
    setCheckBox((prevValue) => !prevValue);
    if (event.target.checked) {
      setCheckedIds([...rows.map((row) => row.id)]);
    } else {
      setCheckedIds([]);
    }
  };

  const renderTableBody = () => {
    return rows.map((row, i) => {
      const { albumId, id, title, url, thumbnailUrl } = row;
      const isRowSelected = checkedIds.includes(id);
      return (
        <tr
          key={i}
          style={{ height: '160px' }}
          className={isRowSelected ? 'row-selected' : ''}
          onClick={onRowClick}
        >
          <td>
            <input
              type='checkbox'
              checked={isRowSelected}
              onChange={(e) => handleSingleCheckBoxClick(e, id)}
            />
          </td>
          <td style={columns[0].style}>{albumId}</td>
          <td style={columns[1].style}>{id}</td>
          <td style={columns[2].style}>{title}</td>
          <td style={columns[3].style}>
            <a href={url}>{url}</a>
          </td>
          <td style={columns[4].style}>
            <img src={thumbnailUrl} alt='img' />
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                checked={checkBox}
                onChange={(e) => handleAllCheckBoxClick(e)}
              />
            </th>
            {renderTableHeader()}
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
}
