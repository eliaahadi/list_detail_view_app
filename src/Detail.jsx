import React, { Component } from 'react';
import '../styles/App.css';

const Detail = (data) => {
  return (
      <div>
        <button className="back-button" onClick={data.backButton}>BACK</button>
        <div>
          {
          !data.item.is_sold_out && 
          <div className="item-stock">Item is in stock!</div>
          || 
          data.item.is_sold_out && 
          <div className="sold-out">SOLD OUT!</div>
          }
          </div>
        <h4>{data.item.name}</h4>
        <img src={data.item.image} />
        <p>Item name: {data.item.name}</p>
        <p><img src="src/img/like_red.png" />
        {data.item.like_count}</p>
        <p>Description: {data.item.description}</p>
        <section className="price-buy-section">Price: ¥{data.item.price} 
         {data.item.shipping_fee}<button className="buy-button" onClick={()=>{ alert("Go to next screen and buy!") }}>Buy</button></section>
      </div>
  )
}

export default Detail;