import React from 'react';

function ProductDetail(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <img src={props.product.image} alt={props.product.name} />
    </div>
  );
}

export default ProductDetail;
```

This is a basic e-commerce website with a Django backend and a React frontend. It includes categories, products, and product details. The frontend is a single-page application that uses React Router for client-side routing. The backend uses Django's built-in ORM to interact with the database.