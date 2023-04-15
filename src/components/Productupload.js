import React, { useState } from 'react';
import './Productupload.css';
import signinimage from '../Wavy_Ppl-05_Single-09.jpg';

function generateItemID() {
  // Generate a random two-letter string
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomLetters = '';
  for (var i = 0; i < 2; i++) {
    randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  // Generate a random four-digit number
  var randomNumber = Math.floor(Math.random() * 10000);
  var paddedNumber = randomNumber.toString().padStart(4, '0');

  // Combine the two to form the itemID
  var itemID = randomLetters + paddedNumber;

  return itemID;
}

function ProductUploadPage() {
  const [productName, setTitle] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // code to upload the product data to the server goes here
    const sellerID = '1234567890';
    var itemID = generateItemID();
    const brandName = 'temp';
    const sellingStatus = 'Available'
    const specs = description
    const contactNo = '1234567890'
    const yearsUsed = 2
    const relevanceScore = 1
    const productData = { 
      itemID, 
      sellerID, 
      productName, 
      brandName, 
      price, 
      sellingStatus,
      specs,
      contactNo,
      category,
      yearsUsed,
      relevanceScore
    };
    const response = await fetch('/api/Product', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response) {
      window.alert('Product uploaded successfully')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={productName} onChange={handleTitleChange} />
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
