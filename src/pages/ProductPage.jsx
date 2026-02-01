import { useParams } from "react-router-dom";

import products from "../data2/index.js";
import ProductDetails from "./ProductDetails";
const ProductPage = () => {
  const { slug } = useParams();
console.log("Slug from URL:", slug);
console.log("Available products:", products);
  const product = products.find(
    (item) => item.slug === slug
  );
  console.log("Matched product:", product);

  if (!product) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-semibold">
          Product not found
        </h1>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
