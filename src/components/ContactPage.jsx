import React, { useState } from "react";
/* import ProductPage from "./ProductPage"; */

const ContactPage = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(" ");
  const [item, setItem] = useState([]);

  const incrementFunction = () => {
    setCount(count + 1);
  };
  const decrementFunction = () => {
    if (count === 0) {
      setCount = 0;
    } else {
      setCount(count - 1);
    }
  };
  const handleInput = (e) => {
    setProduct(e.target.value);
  };

  const clickEvent = (e) => {
    e.preventDefault();
    if (product !== "") {
      setItem([...item, product]);
      console.log([...item, product]);
      setProduct("");
    }
  };

  const deleteEvent = (index) => {
    console.log(index);
    const deleteArray = [...item];
    deleteArray.splice(index, 1);
    setItem(deleteArray);
  };

  return (
    <div>
      <div className="flex items-center justify-end m-5 space-x-5 ">
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
      <div className="mx-auto max-w-md font-semibold bg-blue-500 p-2 text-center text-xl text-white rounded-lg my-5">
        Add your favourite product
      </div>
      <div className="max-w-md mx-auto">
        <form action="" className="space-x-3 p-5">
          <input
            type="text"
            name="items"
            className="bg-gray-500 p-2 rounded-lg text-white outline-none"
            placeholder="Enter your product Name"
            value={product}
            onChange={handleInput}
          />
          <button
            type="submit"
            className="bg-yellow-300  p-2 rounded-lg  font-semibold hover:text-gray-500"
            onClick={clickEvent}
          >
            + Add Product
          </button>
        </form>
      </div>
      <ol className="text-white mt-10 max-w-md mx-auto">
        {item.map((items, index) => {
          return (
            <li
              key={index}
              className="bg-blue-400 px-5 mb-5 py-2 rounded text-gray-800 flex justify-between items-center cursor-pointer hover:bg-blue-600 hover:text-white"
            >
              {items}
              <button
                type="button"
                className="text-3xl"
                onClick={() => deleteEvent(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  ></path>
                </svg>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ContactPage;
