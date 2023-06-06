import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { meals } from './data';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import Home from './components/Home';
function App() {
  const [itemsData, setItemsData] = useState(meals);
  // Get All Categories
  const allCategory = ["all", ...new Set(meals.map(i => i.strMeal))];
  
  // Filtering By Categories
  const filterByCategoriy = (type) => { 
    if (type === "all") {
      setItemsData(meals)
    }
    else {
      const newItems = meals.filter((item) => item.strMeal === type);
      setItemsData(newItems);
    }
  }

  // Filtering By Search
  const filterBySearch = (word) => { 
    if (word !== "") {
      const newItems = meals.filter((item) => item.strMeal === word);
      setItemsData(newItems);
    }
  }
  return (
    <div className="color-body font">
      <Navbar filterBySearch={filterBySearch} />
        <Routes>
          <Route path="/" element={<Home filterByCategoriy={filterByCategoriy} allCategory={allCategory} itemsData={itemsData} />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
    </div>
  );
}

export default App