import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import Footer from "../SharedComponents/Footer/Footer";
import ProductCard from "../SharedComponents/ProducrtCard/ProductCard";
import ProductSkeleton from "../Skeletons/ProductSkeleton";
import "./Shop.scss";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Shop = ({ products, setProducts, alreadyLoaded }) => {
  const [category, setCategory] = useState("allProducts");

  useEffect(() => !alreadyLoaded&&setProducts(), [setProducts, alreadyLoaded]);

  let data;

  if (category === "allProducts") {
    data = products;
  } else if (category === "women") {
    data = products.filter(pd => pd.category==="Women Cloth");
  } else if (category === "men") {
    data = products.filter(pd => pd.category==="men_cloth");
  } else if (category === "shoe") {
    data = products.filter(pd => pd.category==="shoe");
  }
  const handleCategory = (event) => {
    setCategory(event.target.name);
  };

  return (
    <section className='shop-section'>
      <div className='category'>
        <button
          className={
            category === "allProducts"
              ? "active-btn"
              : "inactive-btn"
          }
          name='allProducts'
          onClick={handleCategory}
        >
          All products
        </button>
        <button
          className={
            category === "women"
              ? "active-btn"
              : "inactive-btn"
          }
          name='women'
          onClick={handleCategory}
        >
          Women
        </button>
        <button
          className={
            category === "men"
              ? "active-btn"
              : "inactive-btn"
          }
          name='men'
          onClick={handleCategory}
        >
          Men
        </button>
        <button
          className={
            category === "shoe"
              ? "active-btn"
              : "inactive-btn"
          }
          name='shoe'
          onClick={handleCategory}
        >
          Shoe
        </button>
      </div>
      <div className='products-container'>
        {
          data.length>0?
          data.map((data) => (
          <ProductCard key={data.key} data={data} />
          ))
          :arr.map((_) => <ProductSkeleton key={_} />)
        }
      </div>
      <Footer />
    </section>
  );
};

const mapStateToProps = state => {
  const { products, alreadyLoaded } = state.productsReducer;
  return {
    products,
    alreadyLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setProducts: () => dispatch(fetchProducts()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
