import React from 'react'
import "./ItemsList.css";
import { useNavigate } from 'react-router-dom';
function ItemsList({ itemsData }) {
    const navigate = useNavigate();
    const data = itemsData.map((meal) => {
        return (
            <div className='col-12' key={meal.idCategory}>
                <div className="item p-2" >
                    <img src={meal.strCategoryThumb} className="item-img" alt="..." />
                    <div className="item-body w-100  p-2">
                        <div className="item-header d-flex justify-content-between align-items-center">
                            <h5 className="item-title">{meal.strCategory}</h5>
                            <span className='item-price'>{meal.strMeal}</span>
                        </div>
                        
                        <p className="item-text item-description">{meal.strCategoryDescription.length>200?meal.strCategoryDescription.slice(0,200):meal.strCategoryDescription }</p>
                        <button className="buttonStyle" onClick={()=>navigate(`/${meal.idCategory}`)}>Show Product</button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='row mt-2'>
            {data ? data : <h3 className='text-center fs-1'>There Is No Meals</h3>}
        </div>
    )
}

export default ItemsList