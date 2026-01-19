import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import ProductCard from "../components/Productcard.jsx";
import Loader from "../components/Loader.jsx";
import Footer from "../components/Footer.jsx";
import { fetchProducts } from "../services/api.js";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();
    return (
      product.title.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar onSearch={setSearchTerm} />

      {/* Product Grid yoki Loader */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex-1">
        {loading ? (
          <Loader />
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            ❌ Hech narsa topilmadi
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
