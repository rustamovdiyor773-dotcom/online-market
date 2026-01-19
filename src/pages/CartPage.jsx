import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart, clearCart } from "../features/cart/cartSlice.js";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white p-4 flex justify-between items-center rounded shadow">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(decreaseQty(item.id))} className="px-2 bg-gray-200 rounded">-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))} className="px-2 bg-gray-200 rounded">+</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-4 text-red-500 font-bold">Remove</button>
                </div>
              </div>
            ))}
            <div className="text-right font-bold text-xl mt-4">Total: ${total.toFixed(2)}</div>
            <div className="text-right mt-2">
              <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
