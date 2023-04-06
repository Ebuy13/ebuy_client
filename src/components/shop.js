import React, { useState } from 'react';
import './StoreHomePage.css';
import proimage from "../Mikasa.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import  StatusBar from "./Statusbar";

const products = [
  { id: 1, name: 'Product 1', price: 10, category: 'LAPTOPS', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGGIPpfcSqPRRClQr_F8aP5VD7U1w2K51jw&usqp=CAU',},
  { id: 2, name: 'Product 2', price: 20, category: 'WATCHES', image: 'https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg', },
  { id: 3, name: 'Product 3', price: 30, category: 'LAPTOPS', image: 'https://cdn.pixabay.com/photo/2021/11/05/11/08/laptop-6771039_1280.jpg', },
  { id: 4, name: 'Product 4', price: 40, category: 'TABLES', image: 'https://media.istockphoto.com/id/481546055/es/foto/oficina-interior.jpg?s=1024x1024&w=is&k=20&c=Ect7sG440ez6ckC0h3whJ2pXCKTKSBnf5-CZQUsG2O0=', },
  { id: 5, name: 'Product 5', price: 335, category: 'TABLES', image: 'https://media.istockphoto.com/id/186122704/es/foto/oficina-interior.jpg?s=1024x1024&w=is&k=20&c=8LTz-4I-ghIvhirW14Xg17BzxvW2ZOvqcaKUYXL-yok=', },
  { id: 6, name: 'Product 6', price: 3345, category: 'LAPTOPS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi_a8C10Ql63E9UeFJLc2AiBr4YjOmzeUfA&usqp=CAU', },
  { id: 7, name: 'Product 7', price: 3345, category: 'BOOKS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7bRxO1Xsfu_WlNXCC8vr5wYRkcOpspkDgg&usqp=CAU', },
  { id: 9, name: 'Product 9', price: 3345, category: 'BOOKS', image: 'https://media.springernature.com/full/springer-static/cover-hires/book/978-1-84628-963-7', },
  { id: 10, name: 'Product 10', price: 3345, category: 'MOBILES', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lexhP8NJkTooFJVGeau3GyQCcJfYUdNX_g&usqp=CAU', }
];

const categories = ['All', 'LAPTOPS', 'WATCHES', 'FURNITURE','VEHICLES','MOBILES','BOOKS','ELECTRONICS',];

const StoreHomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
   
  const handleDashboardClick = () =>{
    setShowDashboard(!showDashboard);
  }

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }
    if (searchQuery !== '' && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
  
    <div className="store-homepage">
      <div className="store-homepage__header">
        <div className="store-homepage__menu-icon" onClick={handleDashboardClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="store-homepage__search">
          <input
            type="text"
            className="store-homepage__search-input"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <div className="store-homepage__search-icon" style={{marginLeft:"1cm"}}>
            <FontAwesomeIcon icon={faSearch} />

          </div>
          <a href="/Productupload" style={{ display: "inline-block", marginLeft: "10px"}}>
  <button type="button" >To Sell</button>
</a>


          <a href="/Productupload" style={{ display: "inline-block", marginLeft: "10px"}}>
  <button type="button">User Profile</button>
</a>
        </div>
        
      </div>
      
      {showDashboard && (
        <div className="store-homepage__dashboard">
          <ul className="store-homepage__dashboard-categories">
            {categories.map((category) => (
              <li
                key={category}
                className={`store-homepage__dashboard-category${selectedCategory === category ? ' active' : ''}`}
                onClick={() => handleCategorySelection(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      

      <div className="store-homepage__products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="store-homepage__product">
            <img className="store-homepage__product-image" src={product.image} alt={product.name} />
            <h3 className="store-homepage__product-name">{product.name}</h3>
            <p className="store-homepage__product-price">${product.price}</p>
            <p className="store-homepage__product-category">{product.category}</p>
            <button className="store-homepage__product-select-button">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};


function CreateStoreHomeWrapper() {
  return (
    <div className="create-store-home-page-wrapper">
      <StoreHomePage />
    </div>
  );
}

export default CreateStoreHomeWrapper;
