import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../Context/UserContext';
import { FaTrash } from "react-icons/fa6";

function Cart() {
  const { cart, setCart } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchCartData();
  }, []);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.product_id !== id));
  };

  const totalItems = cart.reduce((total, item) => total + item.product_quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.product_price * item.product_quantity), 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>
      {loading && (
        <div className="grid grid-cols-1 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md bg-white p-6 flex items-center justify-between animate-pulse"
            >
              <div className="h-20 w-20 bg-gray-300 rounded-lg"></div>
              <div className="flex flex-col flex-grow">
                <div className="w-2/3 h-6 bg-gray-300 rounded mt-2"></div>
                <div className="w-1/2 h-6 bg-gray-300 rounded mt-2"></div>
              </div>
              
              {!loading && (
                <div className="bg-red-600 text-white rounded-lg p-2 hover:bg-red-700 transition-colors duration-300 focus:outline-none">
                  <FaTrash className="text-xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && cart.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-8 mb-8">
            {cart.map((item) => (
              <div
                key={item.product_id}
                className="border border-gray-200 rounded-lg shadow-md bg-white p-6 flex items-center justify-between"
              >
                <img
                  className="h-20 w-20 object-contain mr-4"
                  src={item.product_image}
                  alt={item.product_title}
                />
                <div className="flex flex-col flex-grow">
                  <h1 className="font-semibold text-lg mb-2">{item.product_title}</h1>
                  <p className="font-semibold text-gray-700 mb-1">${item.product_price}</p>
                  <p className="font-semibold text-gray-700">Quantity: {item.product_quantity}</p>
                </div>
                <button
                  type="button"
                  className="bg-red-600 text-white rounded-lg p-2 hover:bg-red-700 transition-colors duration-300 focus:outline-none"
                  onClick={() => removeFromCart(item.product_id)}
                >
                  <FaTrash className="text-xl" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Total Items:</span>
              <span className="text-lg font-semibold">{totalItems}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold">Total Price:</span>
              <span className="text-lg font-semibold">${totalPrice}</span>
            </div>
            <button
              type="button"
              className="w-full bg-green-600 text-white rounded-lg py-3 hover:bg-green-700 transition-colors duration-300 focus:outline-none"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {!loading && cart.length === 0 && (
        <h1 className="text-2xl font-semibold text-gray-700">Your cart is empty.</h1>
      )}
    </div>
  );
}

export default Cart;