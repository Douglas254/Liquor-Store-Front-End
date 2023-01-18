import React, { useEffect, useState } from "react";
// import Kindone from "../assets/kind-1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Kind = () => {
  const [productType, setProductType] = useState([]);

  useEffect(() => {
    axios
      .get(`https://liquorstorev1.pythonanywhere.com/product_type`)
      .then((response) => {
        setProductType(response.data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        {productType.map(({ category_name, id, image }) => (
          <div className="mb-10 mx-9" key={id}>
            <div class="border-2 border-red-800 inline-block rounded-full p-2 hover:scale-95 hover:cursor-pointer">
              <Link to={`productype/${id}`}>
                <img
                  src={image}
                  // alt={`product_type ${id}`}
                  className="rounded-full w-32 h-32"
                />
              </Link>
            </div>
            <h1 className="text-center">{category_name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kind;
