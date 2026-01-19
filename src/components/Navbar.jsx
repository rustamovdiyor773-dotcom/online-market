import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ onSearch }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopMate
        </Link>

        {/* Search */}
        {onSearch && (
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-5 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute left-4 top-2.5 text-gray-400">🔍</span>
          </div>
        )}

        {/* Cart */}
        <Link to="/cart" className="relative text-2xl">
          🛒
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalQty}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
