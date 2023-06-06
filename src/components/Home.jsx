import React from 'react'
import Header from "./Header"
import Category from "./Category"
import ItemsList from "./ItemsList/ItemsList"

function Home({filterByCategoriy,allCategory,itemsData}) {
  return (
    <div className='container'>
    <Header />
    <Category filterByCategoriy={filterByCategoriy} allCategory={allCategory} />
    <ItemsList itemsData={itemsData} />
      </div>
  )
}

export default Home