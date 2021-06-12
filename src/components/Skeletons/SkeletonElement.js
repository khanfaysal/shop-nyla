import React from 'react';
import './SkeletonElement.scss';

const SkeletonElement = ({ type }) => {
    return (
        <div className={`skeleton ${type}`}></div>
    );
};

export default SkeletonElement;