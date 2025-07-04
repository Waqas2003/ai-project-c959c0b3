import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get('/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <h1>Product List</h1>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option value={category.slug}>{category.name}</option>
        ))}
      </select>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/products/${product.id}/${product.slug}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;