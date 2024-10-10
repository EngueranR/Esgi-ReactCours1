import React, { useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import "./ProductGrid.css";
import { Product } from "../../Interfaces/Product";
import { Cart } from "../../Component/Cart/Cart";

const products: Product[] = [
  { id: 1, name: "Pomme", description: "Pomme rouge fraîche", price: 1.99 },
  { id: 2, name: "Banane", description: "Banane jaune mûre", price: 0.99 },
  { id: 3, name: "Cerise", description: "Cerises rouges sucrées", price: 3.99 },
  { id: 4, name: "Datte", description: "Dattes délicieuses", price: 4.99 },
  {
    id: 5,
    name: "Baie de sureau",
    description: "Baies de sureau saines",
    price: 5.99,
  },
  { id: 6, name: "Figue", description: "Figues juteuses", price: 2.99 },
];

const ProductGrid = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (product: Product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: (prevCart[product.id] || 0) + 1,
    }));
  };

  return (
    <div className="grid-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} products={products} />
    </div>
  );
};

export default ProductGrid;
