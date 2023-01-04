import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const params = useParams();
  const id = params.id;

  const getProductDetails = async () => {
    const details = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return details.data;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getProductDetails());
    };

    fetchData();
  }, []);

  const { image, title, description, price, category } = data;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>Category:</span> {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
