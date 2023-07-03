import React, { useState } from 'react';
import Table from './Table';
import Preview from './Preview';
import './App.css';
import { itemData } from './data';

function Home() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleItemSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(item => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const totalPrice = selectedItems.reduce((total, itemId) => {
    return total + itemData.st[itemId].price;
  }, 0);

  const isGoToPayEnabled = selectedItems.length > 0;

  const handleGoToPay = () => {
    setIsPreviewVisible(true);
  };

  const handleClearSelection = () => {
    setSelectedItems([]);
  };

  return (
    <div className='container'>
      <div className="app">
        {!isPreviewVisible ? (
          <>
            <Table
              itemData={itemData}
              selectedItems={selectedItems}
              handleItemSelection={handleItemSelection}
              totalPrice={totalPrice}
            />
            <button
              className="go-to-pay-button"
              disabled={!isGoToPayEnabled}
              onClick={handleGoToPay}
            >
              GO TO PAY
            </button>
            <button
              className="clear-selection-button"
              disabled={selectedItems.length === 0}
              onClick={handleClearSelection}
            >
              Clear Selection
            </button>
          </>
        ) : (
          <Preview selectedItems={selectedItems} itemData={itemData} />
        )}
      </div>
    </div>
  );
}

export default Home;