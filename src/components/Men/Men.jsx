import React, { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import UserContext from "../../Context/UserContext";

function Men() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { cart, setCart } = useContext(UserContext);

  const url = "https://fakestoreapi.com/products/category/men's clothing";

  const consumeAPI = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setProducts(result);

      const initialQuantities = result.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
      }, {});
      setQuantities(initialQuantities);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    consumeAPI();
  }, []);

  const incrementQuantity = (id) => {
    if (quantities[id] < 10) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] + 1,
      }));
    }
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1),
    }));
  };

  const handleCart = (id, image, title, price) => {
    const existingItem = cart.find((item) => item.product_id === id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product_id === id
          ? { ...item, product_quantity: item.product_quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          product_id: id,
          product_image: image,
          product_title: title,
          product_price: price,
          product_quantity: quantities[id],
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {loading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-md bg-white p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-40 w-40 bg-gray-200 rounded-lg"></div>
                <div className="w-2/3 h-6 bg-gray-200 mt-4 rounded"></div>
                <div className="w-1/2 h-6 bg-gray-200 mt-2 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg shadow-md bg-white p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  className="h-40 w-40 object-contain mb-4"
                  src={product.image}
                  alt={product.title}
                />
                <h1 className="font-semibold text-center mb-2 text-lg">
                  {product.title}
                </h1>
                <p className="font-semibold text-center">${product.price}</p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 border border-gray-300">
                    <button
                      className="text-xl font-bold px-2 focus:outline-none"
                      onClick={() => decrementQuantity(product.id)}
                    >
                      -
                    </button>
                    <h1 className="text-xl font-semibold px-3">
                      {quantities[product.id]}
                    </h1>
                    <button
                      className="text-xl font-bold px-2 focus:outline-none"
                      onClick={() => incrementQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="bg-black text-white rounded-lg p-2 hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
                    onClick={() =>
                      handleCart(
                        product.id,
                        product.image,
                        product.title,
                        product.price
                      )
                    }
                  >
                    <FaCartShopping className="text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && error && (
        <div className="h-screen flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Error fetching data.
            </h1>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
              onClick={consumeAPI}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {!loading && products.length === 0 && !error && (
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">No products found.</h1>
        </div>
      )}
    </div>
  );
}

export default Men;