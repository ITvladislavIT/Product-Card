import React from "react";

const HeadPhones = () => {
  return (
    <div className="m-10 p-10 border-2 rounded-md shadow-lg w-max">
      <img src="./image.test.jpg" className="mx-auto" />
      <b className="text-3xl">$100</b>
      <h2 className="pt-5 text-xl font-semibold">Zebronics head phone</h2>
      <p className="pt-2">
        A portable headphone with a battery life of 20 hours and IP67 rating.
        Comes with a 3 years warranty.
      </p>
      <p className="py-5 text-gray-500">Choose your colour</p>
      <div className="">
        <button
          class="bg-red-500 mr-2 p-4 rounded-full border-4 border-gray-200 hover:bg-red-700 hover:border-black focus:border-black checked:bg-black"
          type="radio"
          name="color"
          value="red"
        />
        <button
          class="bg-blue-500 mr-2  p-4 rounded-full border-4 border-gray-200 hover:bg-blue-700 hover:border-black focus:border-black checked:bg-black"
          type="radio"
          name="color"
          value="blue"
        />
        <button
          class="bg-black p-4 rounded-full border-4 border-gray-200 hover:bg-black hover:border-black focus:border-black checked:bg-black"
          type="radio"
          name="color"
          value="black"
        />
      </div>
      <div className="mx-5 py-5">
        <button className="w-full py-2 border text-gray-800 text-2xl bg-yellow-400 text-2xl rounded-lg hover:bg-yellow-500 transition-all delay-100  hover:border-gray-400">
          Add to cart
        </button>
      </div>
      <div className="mx-5 mb-5">
        <button className="w-full py-2 text-gray-800  text-2xl rounded-lg border border-blue-300 hover:bg-gray-100 hover:border-blue-500">
          Buy now
        </button>
      </div>
      <a
        className="text-blue-500 border-b border-blue-500 hover:text-blue-800 border-blue-800"
        href="#"
      >
        Read reviews
      </a>
    </div>
  );
};

export default HeadPhones;