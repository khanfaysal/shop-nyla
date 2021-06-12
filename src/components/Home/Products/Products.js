import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../redux/actions/productsActions";
import ProductsCard from "../../SharedComponents/ProducrtCard/ProductCard";
import ProductSkeleton from "../../Skeletons/ProductSkeleton";
import "./Products.scss";

const arr =[1, 2, 3, 4, 5, 6, 7, 8];

const Products = ({ products, setProducts, alreadyLoaded }) => {

  useEffect(() => !alreadyLoaded&&setProducts(), [setProducts, alreadyLoaded]);
  
  return (
    <section className='product-overview'>
      <h1 className='product-overview-header'>
        Product Overview
      </h1>
      <div className='products-container'>
        {
          products.length>0?
          products.slice(0, 8).map((data) => (
          <ProductsCard data={data} key={data.key} />
        )):arr.map((_) => <ProductSkeleton key={_} />)}
      </div>
      <div className='view-all-btn-container'>
        <Link className='btn-secondary' to='/shop'>
          View All
        </Link>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
