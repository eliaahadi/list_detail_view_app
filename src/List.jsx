import React, { Component } from 'react';
import '../styles/App.css';

const List = ({items, handleItemSelect}) => {
  return (
    <h1>Item Catalog
    <div className='list'>
    {items.map((item, idx) => {
      return (
      <div className="list-item" key={idx}>
        <button key={idx} onClick={() => handleItemSelect(item)}>
          <div>
            {
              !item.is_sold_out && 
              <div className="item-stock">Item is in stock!</div>
              || 
              item.is_sold_out && 
              <div className="sold-out">SOLD OUT!</div>
            }
          </div>
          <div>
          Name: {item.name}
          </div>
          <div>
          Price: {item.price}
          </div>
          <div>
          <img className='list-image' src={item.image}/>
          </div>
          <img src="src/img/like_red.png" />
          <div>
          {item.like_count}
          </div>
        </button>
      </div>
      )
    })
    }
    </div>
    </h1> 
  )
};

export default List;