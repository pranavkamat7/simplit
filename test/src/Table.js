import React from 'react';
import './App.css';
function Table({ itemData, selectedItems, handleItemSelection, totalPrice }) {
  return (
    <div className='table'>
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Colour</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(itemData.st).map(([itemId, item]) => (
          <tr key={itemId}>
            <td>
              <input
                type="checkbox"
                checked={selectedItems.includes(itemId)}
                onChange={() => handleItemSelection(itemId)}
              />
            </td>
            <td>{item.name}</td>
            <td>{item.brand}</td>
            <td>{item.colour}</td>
            <td>{item.price}</td>
          </tr>
        ))}
        <tr>
          <td><b>Total Price:</b></td>
          <td colSpan="4"><b>{totalPrice}</b></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Table;
