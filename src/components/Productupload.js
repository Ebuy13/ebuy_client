import React, { useState } from 'react';
import './Productupload.css';
import signinimage from '../Wavy_Ppl-05_Single-09.jpg';

function ProductUploadPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [condition, setCondition] = useState('');
  const [availability, setAvailability] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePhotosChange = (event) => {
    const newPhotos = Array.from(event.target.files);
    setPhotos(newPhotos);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // code to upload the product data to the server goes here
    //const sellerID = 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="LAPTOPS">Laptops</option>
          <option value="BOOKS">Books</option>
          <option value="FURNITURE">Furniture</option>
          <option value="MOBILES">Mobiles</option>
          <option value="ELECTRONICS">Electronics</option>
        </select>
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={handlePriceChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Photos:
        <input type="file" multiple onChange={handlePhotosChange} />
      </label>
      <br />
      <label>
        Condition:
        <select value={condition} onChange={handleConditionChange}>
          <option value="new">New</option>
          <option value="like-new">Like New</option>
          <option value="used">Used</option>
        </select>
      </label>
      <br />
      <label>
        Availability:
        <select value={availability} onChange={handleAvailabilityChange}>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>
      </label>
      <br />
      <button type="submit">Upload Product</button>
      <div className="image-container" >
						<img
							src={signinimage}
							className="img-fluid"
							alt="Welcome to our eCommerce store!" />
						
					</div>
    </form>
    
    
  );
}

export default ProductUploadPage;
