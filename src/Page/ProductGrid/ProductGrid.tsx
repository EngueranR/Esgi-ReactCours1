import ProductCard from "../../Component/ProductCard/ProductCard";
import "./ProductGrid.css";
import { ReactNode } from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    price: 29.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    price: 39.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    price: 49.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description 4",
    price: 19.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description 5",
    price: 59.99,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description 6",
    price: 24.99,
  },
];

const ProductGrid = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {children}
    </div>
  );
};

export default ProductGrid;
