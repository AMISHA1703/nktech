import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SoftwareAndApps() {
  const [sortOption, setSortOption] = useState("popularity");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSort = (option) => {
    setSortOption(option);
    let sortedProducts = [...products];

    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  if (loading) return <p className="p-6">Loading products...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <p className="text-gray-500 text-sm mb-2">Home / Software & Apps</p>
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Software & Apps</h1>
      <p className="text-gray-600 mb-6">Showing all {products.length} results</p>

      {/* Sorting */}
      <div className="flex justify-end mb-6">
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        >
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="latest">Sort by latest</option>
          <option value="lowToHigh">Sort by price: low to high</option>
          <option value="highToLow">Sort by price: high to low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white relative group"
          >
            {product.sale && (
              <span className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 text-xs rounded-full shadow-md">
                Sale!
              </span>
            )}
            <div className="overflow-hidden h-48 flex items-center justify-center bg-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-1 text-gray-800 hover:text-blue-600 transition">
                {product.title}
              </h2>
              {product.oldPrice && (
                <p className="text-gray-400 line-through text-sm">
                  ₹{product.oldPrice.toLocaleString()}
                </p>
              )}
              <p className="text-yellow-600 font-bold text-lg mb-4">
                ₹{product.price.toLocaleString()}
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-md shadow-md hover:opacity-90 transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
