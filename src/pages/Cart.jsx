import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const [cartRemoveRes, setCartRemoveRes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://liquorstorev1.pythonanywhere.com/productCart`)
      .then((response) => {
        setCart(response.data);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const token = JSON.parse(localStorage.getItem("user")).token;
      axios
        .get("https://liquorstorev1.pythonanywhere.com/user/cart_total", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCartTotal(res.data.total);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const removeFromCart = (id) => {
    if (localStorage.getItem("user") !== null) {
      const token = JSON.parse(localStorage.getItem("user")).token;
      axios
        .post(
          "https://liquorstorev1.pythonanywhere.com/productCart/remove_from_cart",
          {
            product_id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setCartRemoveRes(res.data);
          console.log(res.data);

          toast.success(`${res.data.msg}`);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          toast.error(`${err.response.data.msg}`);
        });
    }
  };

  const cartList = cart.map(({ product, quatity, total }) => {
    const { image, text_description, name, buy_price, id } = product;

    return (
      <tr className="border-b border-gray-400" key={id}>
        <td className="">
          <div className="mr-3">
            <img src={image} alt="cart image" className="w-10" />
          </div>
        </td>
        <td className="">
          <div className="flex flex-col mr-3">
            <span className="font-semibold text-[18px]">{name}</span>
          </div>
        </td>
        <td className="min-w-[100px]">ksh. {buy_price}</td>
        <td className="quantity border-bottom-0">
          <div className="input-group">
            <div className="my-3 mx-14">
              <div className="px-6 border py-1 font-bold text-sm">
                {quatity}
              </div>
            </div>
          </div>
        </td>
        <td className="min-w-[100px]">Ksh. {total}</td>
        <td className="">
          <button
            type="button"
            className="mr-10"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span
              aria-hidden="true"
              className="ml-10 text-[#bd6870] text-xl"
              onClick={() => removeFromCart(id)}
            >
              x
            </span>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {cartTotal == 0 ? (
        <div className="h-screen">
          <div className="flex justify-center items-center mt-24">
            <img src="src/assets/emptybag.png" alt="" className="h-[400px] w-auto"/>
          </div>
        </div>
      ) : (
        <section className="mb-16">
          <div className="m-auto md:mx-32">
            <div className="flex">
              <div className="">
                <table className="mt-12 table-auto">
                  <thead className="bg-[#B7472A] text-white">
                    <tr>
                      <th className="p-6">&nbsp;</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>total</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody className="">{cartList}</tbody>
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
                    <span>Ksh.{cartTotal}</span>
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
      )}
    </>
  );
};

export default Cart;
