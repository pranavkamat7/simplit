import React from 'react';





function Preview({ selectedItems, itemData }) {
   
  
    https://pranavtest.netlify.app/

    return (

        <div>
            <h2>Preview Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Colour</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map(itemId => {
                        const item = itemData.st[itemId];
                        return (
                            <tr key={itemId}>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.colour}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div><b>Total Price:</b> {selectedItems.reduce((total, itemId) => total + itemData.st[itemId].price, 0)}</div>
         
        </div>
    );
}

export default Preview;
