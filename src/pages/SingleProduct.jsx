import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const [singleData, setSingleData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartRes, setCartRes] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://liquorstorev1.pythonanywhere.com/product`)
      .then((response) => {
        setSingleData(response.data);
      });
  }, []);

  const { productId } = useParams();

  const product = singleData.find((data) => data.id === Number(productId));
  if (product === undefined) {
    return "No product found";
  }

  const increment = () => {
    setQuantity((prev) => {
      if (quantity_in_stock > prev) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const addToCart = () => {
    if (localStorage.getItem("user") !== null) {
      const token = JSON.parse(localStorage.getItem("user")).token;
      axios
        .post(
          "https://liquorstorev1.pythonanywhere.com/productCart/add_to_cart",
          {
            product_id: Number(productId),
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setCartRes(res.data);
          toast.success(`${res.data.msg}`);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("you need to login");
      navigate("/signin");
    }
  };

  const {
    buy_price,
    category_id,
    html_description,
    id,
    image,
    name,
    quantity_in_stock,
    text_description,
  } = product;

  console.log(product);
  // console.log(singleData);

  return (
    <>
      <div className="flex mx-28 my-12">
        <div className="md:mr-10">
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <div>
          <h1 className="font-bold sm:text-2xl text-5xl">{name}</h1>
          <h3 className="my-3 text-2xl font-light">Ksh. {buy_price}</h3>
          <p className="font-extralight">{text_description}</p>
          <div className="my-3 mx-14">
            <button
              className="border px-4 py-1 font-bold text-2xl"
              onClick={decrement}
            >
              -
            </button>
            <button className="mx-2 px-12 border py-1 font-bold text-2xl">
              {quantity}
            </button>
            <button
              className="border px-4 py-1 font-bold text-2xl"
              onClick={increment}
            >
              +
            </button>
          </div>
          <div className="flex mx-3">
            <div
              className="mr-4 bg-[#B7472A] cursor-pointer p-2 rounded-md text-white text-sm"
              onClick={addToCart}
            >
              Add to Cart
            </div>

            <div className="bg-[#B7472A] p-2 rounded-md text-white text-sm">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
