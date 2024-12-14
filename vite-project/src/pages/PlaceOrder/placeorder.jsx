import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="container mx-auto p-6">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Delivery Form */}
        <div className="p-6">
          <p className="text-2xl font-semibold mb-6 text-gray-800">
            Delivery Information
          </p>
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded-md w-full"
            />

            {/* Email Address - Full Width */}
            <div className="col-span-2">
              <input
                type="email"
                placeholder="Email address"
                className="border p-2 rounded-md w-full"
              />
            </div>

            {/* Street - Full Width */}
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Street"
                className="border p-2 rounded-md w-full"
              />
            </div>

            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="State"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Country"
              className="border p-2 rounded-md w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded-md w-full mt-4"
          />
        </div>

        {/* Right Side: Cart Totals */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cart Totals
          </h2>
          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between border-b pb-2">
              <p className="text-gray-600 text-lg">SubTotal</p>
              <p className="text-gray-800 font-medium text-lg">
                ${getTotalCartAmount()}
              </p>
            </div>

            {/* Delivery Fee */}
            <div className="flex justify-between border-b pb-2">
              <p className="text-gray-600 text-lg">Delivery Fee</p>
              <p className="text-gray-800 font-medium text-lg">${getTotalCartAmount()===0?0:2}</p>
            </div>

            {/* Total */}
            <div className="flex justify-between font-semibold text-xl">
              <p className="text-gray-700">TOTAL</p>
              <p className="text-gray-900">
                ${getTotalCartAmount()===0?0:getTotalCartAmount()+2}
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="mt-8 w-full bg-slate-800 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-slate-600 transition duration-300">
            PROCEED TO PAYMENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
