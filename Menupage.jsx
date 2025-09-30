import React from "react";

const MenuPage = () => {
  // Dummy data for 2 items
  const items = [
    {
      id: 1,
      name: "Margherita Pizza",
      image: "https://source.unsplash.com/100x100/?pizza",
      rating: "4.5⭐",
      price: (Math.random() * 300 + 150).toFixed(2), // Random ₹150-₹450
    },
    {
      id: 2,
      name: "Veg Burger",
      image: "https://source.unsplash.com/100x100/?burger",
      rating: "4.2⭐",
      price: (Math.random() * 200 + 100).toFixed(2), // Random ₹100-₹300
    },
  ];

  const handleAddToCart = (item) => {
    alert(${item.name} added to cart 🛒);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">🍽 Menu</h1>

        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">S.No</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Rating</th>
              <th className="py-3 px-4 text-left">Price (₹)</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-semibold">{item.name}</td>
                <td className="py-3 px-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="py-3 px-4">{item.rating}</td>
                <td className="py-3 px-4 font-bold text-green-600">
                  ₹{item.price}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuPage;