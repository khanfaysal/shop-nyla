import React from 'react';
import SkeletonEffect from './SkeletonEffect';
import SkeletonElement from './SkeletonElement';

const ProductSkeleton = () => {
    return (
      <div className='product-card'>
        <div className='product-image'>
          <SkeletonElement type='thumbnail' />
        </div>
        <div className='product-info'>
            <div>
              <SkeletonElement type='title' />
              <SkeletonElement type='price' />
            </div>
          <button className='add-to-cart-btn'>
            <SkeletonElement type='button' />
          </button>
        </div>
        <SkeletonEffect />
      </div>
    );
};

export default ProductSkeleton;