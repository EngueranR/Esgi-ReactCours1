import React from "react";
import { useTheme } from "../../Context/DarkThemeContext";
import "./ProductCard.css";
import { Product } from "../../Interfaces/Product";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { darkTheme } = useTheme();

  return (
    <div className={`product-card-container ${darkTheme ? "dark" : ""}`}>
      <div className="product-card-details">
        <h3 className={darkTheme ? "dark" : ""}>{product.name}</h3>
        <p className={darkTheme ? "dark" : ""}>{product.description}</p>
        <p className={`product-card-price ${darkTheme ? "dark" : ""}`}>
          ${product.price}
        </p>
        <button className={`button ${darkTheme ? "dark" : ""}`}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
