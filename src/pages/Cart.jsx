import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`https://liquorstorev1.pythonanywhere.com/productCart`)
      .then((response) => {
        setCart(response.data);
      });
  }, []);

  return (
    <>
      <section className="mb-16">
        <div className="m-auto md:mx-32">
          <div className="flex">
            <div className="">
              <table className="mt-12 table-auto">
                <thead className="bg-[#B7472A] text-white">
                  <tr>
                    <th className="p-6">&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="border-b border-gray-400">
                    <td className="py-11">
                      <label>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td className="">
                      <div className="mr-3">
                        <img
                          src="https://themewagon.github.io/liquorstore/images/prod-1.jpg"
                          alt="cart image"
                          className="w-10"
                        />
                      </div>
                    </td>
                    <td className="">
                      <div className="flex flex-col mr-3">
                        <span>Jim Beam Kentucky Straight</span>
                        <span>
                          Fugiat voluptates quasi nemo, ipsa perferendis
                        </span>
                      </div>
                    </td>
                    <td className="border-bottom-0">$40.00</td>
                    <td className="quantity border-bottom-0">
                      <div className="input-group">
                        <div className="my-3 mx-14">
                          <div className="mx-2 px-12 border py-1 font-bold text-sm">
                            1
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-bottom-0">$40.00</td>
                    <td className="border-bottom-0">
                      <button
                        type="button"
                        className="mr-10"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          className="ml-10 text-[#EE9AA2] text-xl"
                        >
                          x
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* checkout  */}
          <div className="flex justify-end md:mx-32 mt-12">
            <div className="w-1/2">
              <div className="mb-3 flex flex-col gap-4">
                <h3 className="text-3xl">Cart Totals</h3>
                {/* <p className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p className="flex justify-between">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Discount</span>
                  <span>$3.00</span>
                </p> */}
                <hr />
                <p className="flex justify-between total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
              <p className="w-full bg-[#B7472A] py-4">
                <Link
                  to="/CheckoutContact"
                  className="flex justify-center text-sm text-white "
                >
                  Proceed to Checkout
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
