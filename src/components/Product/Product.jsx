import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import { meals } from '../../data';
import "./Product.css";

function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = meals.filter((meal) => meal.idCategory === id);
  const product = item[0];
  const similerItems = meals.filter((meal) => meal.strMeal === product.strMeal && meal.idCategory !== product.idCategory);
  const similer = similerItems.map((pro) => {
    return (
      <div className='col-12 similer-product  rounded p-2' key={pro.idCategory}>
            <img src={pro.strCategoryThumb} alt="hhh" className='text-center'/>
            <div className='d-flex justify-content-between align-items-center brand-color mt-1'>
              <div>{pro.strCategory}</div>
              <div className='brand-color fs-5 fw-bold'>{pro.strMeal}</div>
            </div>
            <p className="item-text item-description">{pro.strCategoryDescription.length > 200 ? pro.strCategoryDescription.slice(0, 200) : pro.strCategoryDescription}</p>
            <div className="stars">
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>                
            </div>
            <div className='d-flex justify-content-between align-items-center mt-2'>
              <button className='btn btn-outline-dark' onClick={()=>navigate(`/${pro.idCategory}`)}>View</button>
              <span className='brand-color fs-5 fw-bold'>{ product.strPrice}</span>
            </div>
          </div>
    )
  })
  return (
    <div className='product mt-5 mb-5'>
      <div className='container'>
        <h5 className='text-secondary fs-3'>The Product</h5>
        <div className="product-item  p-2 rounded">
        <div className='col-12' key={product.idCategory}>
          <div className="item" >
            <img src={product.strCategoryThumb} className="item-img" alt="..." />
            <div className="item-body w-100  p-2">
              <div className="item-header d-flex justify-content-between align-items-center">
                <h5 className="item-title">{product.strCategory}</h5>
                <span className='item-price'>{product.strMeal}</span>
              </div>
              <p className="item-text item-description">{product.strCategoryDescription.length > 200 ? product.strCategoryDescription.slice(0, 200) : product.strCategoryDescription}</p>
              <div className="stars">
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>
                <AiFillStar className='star-icon'/>                
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-outline-dark mt-2'>Buy</button>
                <span className='brand-color fs-5 fw-bold'>{ product.strPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='similer mt-2 mb-5'>
        <h5 className='text-secondary fs-3'>Similer Products</h5>
          <div className='container'>
            <div className="row g-4 mb-5">
          {similer}
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Product