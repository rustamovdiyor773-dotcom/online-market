import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Loader from "../components/Loader.jsx";
import { fetchProductById } from "../services/api.js";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(id)
      .then(data => setProduct(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div className="p-4 text-center">Product not found</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6 flex-grow">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-contain bg-white p-4 rounded"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-700 mt-2 text-xl font-semibold">${product.price}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
