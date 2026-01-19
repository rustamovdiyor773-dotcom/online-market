import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white p-4 rounded shadow hover:shadow-lg transition flex flex-col"
    >
      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
      <p className="font-bold text-blue-600 text-lg mt-auto">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
