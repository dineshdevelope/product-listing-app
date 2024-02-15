import React, { useState } from "react";

const ContactPage = () => {
  const [count, setCount] = useState(0);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);

  const incrementFunction = () => {
    setCount(count + 1);
  };

  const decrementFunction = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "productName") {
      setProductName(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "quantity") {
      setQuantity(value);
    }
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      productName: productName,
      price: price,
      quantity: quantity,
      total: price * quantity,
    };
    setProducts([...products, newProduct]);
    setProductName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div>
      <div className="flex items-center justify-end m-5 space-x-5">
        <button
          className="bg-gray-700 p-4 rounded-md text-white font-semibold text-5xl hover:bg-gray-800"
          onClick={decrementFunction}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="bg-gray-700 p-4 rounded-md text-white font-semibold text-5xl hover:bg-gray-800 "
          onClick={incrementFunction}
        >
          +
        </button>
      </div>
      <div className="bg-blue-300 text-xl font-semibold p-2 text-center">
        Add your product
      </div>
      <div>
        <form onSubmit={handleAddProduct} className="space-x-3 p-5">
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={handleInputChange}
            className="bg-gray-500 p-2 rounded-lg text-white outline-none"
            placeholder="Enter your product Name"
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleInputChange}
            className="bg-gray-500 p-2 rounded-lg text-white outline-none"
            placeholder="Enter price"
          />
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={handleInputChange}
            className="bg-gray-500 p-2 rounded-lg text-white outline-none"
            placeholder="Enter quantity"
          />
          <button
            type="submit"
            className="bg-yellow-300  p-2 rounded-lg  font-semibold hover:text-gray-500"
          >
            + Add Product
          </button>
        </form>
      </div>
      <div>
        <div>
          <table className="border-collapse border border-gray-800 m-5 mx-auto ">
            <caption className="text-lg font-semibold text-gray-800 mb-2">
              Product List
            </caption>
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-800 px-4 py-2">
                  Product Name
                </th>
                <th className="border border-gray-800 px-4 py-2">Price</th>
                <th className="border border-gray-800 px-4 py-2">Quantity</th>
                <th className="border border-gray-800 px-4 py-2">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="border border-gray-800 px-4 py-2">
                    {product.productName}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {product.price}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {product.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
