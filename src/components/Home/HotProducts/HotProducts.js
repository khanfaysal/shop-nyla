import React from "react";
import { Link } from "react-router-dom";
import data from "./HotProductData";
import "./HotProducts.scss";

const HotProducts = () => {
  return (
    <div className='hot-products-container'>
      {data.map((data) => (
        <Card data={data} key={data.category} />
      ))}
    </div>
  );
};

const Card = ({ data }) => {
  const { category, date, img } = data;
  return (
    <Link className='hot-link' to='/shop'>
      <div className='hot-product-card women'>
        <img src={img} alt='' />
        <div className='card-info'>
          <div className='card-category'>
            <h1>{category}</h1>
            <p>{date}</p>
          </div>
          <div className='shop-now'>
            <p className='shop-now-btn'>Shop now</p>
            <div className='line'></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotProducts;
