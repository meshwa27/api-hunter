import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';

const SingleProductPage = () => {
  const { id } = useParams();  // Make sure you get the id from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchdata = (productId) => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data.data); 
        setLoading(false);     
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);  
      });
  };

  useEffect(() => {
    fetchdata(id);  
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div>
      
      <h1 data-testid="product-brand">{product?.brand}</h1>
      <img data-testid="product-image" src={product?.img} alt={product?.brand} height={300} width={300} />
      <p data-testid="product-category">Category: {product?.category}</p>
      <p data-testid="product-price">Price: ${product?.price}</p>
      <p data-testid="product-details">Details: {product?.details}</p>
    </div>
  );
};

export default SingleProductPage;
