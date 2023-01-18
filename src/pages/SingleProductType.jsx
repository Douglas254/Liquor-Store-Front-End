import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GiDrinkMe } from "react-icons/gi";

const SingleProductType = () => {
  const [singleData, setSingleData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartRes, setCartRes] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://liquorstorev1.pythonanywhere.com/product_type`)
      .then((response) => {
        setSingleData(response.data);
      });
  }, []);

  const { productId } = useParams();

  const product = singleData.find((data) => data.id === Number(productId));
  if (product === undefined) {
    return "No product found";
  }

  const { image, text_description, category_name } = product;

  return (
    <>
      <div className="flex mx-28 my-12">
        <div className="md:mr-10 w-1/2">
          <img
            className="rounded-lg w-full h-[80vh] border-2 border-red-900"
            src={image}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="flex gap-3 font-[poppins] text-3xl italic font-bold uppercase">
            <span>
              <GiDrinkMe />
            </span>
            {category_name}
          </h1>
          <p className="font-extralight">{text_description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProductType;
