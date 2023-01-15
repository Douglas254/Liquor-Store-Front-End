import React, { useEffect, useState } from "react";
// import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
// Default theme
import "@splidejs/react-splide/css";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";

const LatestProduct = () => {

      const [latestProduct, setLatestProduct] = useState([]);
    
      useEffect(() => {
        axios
          .get(`https://liquorstorev1.pythonanywhere.com/product`)
          .then((response) => {
            setLatestProduct(response.data);
          });
      }, []);


  // options for Splide
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    autoplay: true,
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <>
      <div className="mb-11">
        <h1 className="text-4xl font-bold ml-10">Latest Product</h1>
        <div className="mt-7">
          <Splide options={splideOptions}>
            {latestProduct.map(({
                buy_price,
                image,
                name,
                quantity_in_stock,
                text_description,
                id,
              }) => (
            <SplideSlide className="mb-0.5">
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                <div className="flex items-center justify-center">
                  <img
                    src={image}
                    alt={`latest product ${id}`}
                    className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                    <span className="text-xs font-bold">{quantity_in_stock} Remaining</span>
                  </div>
                  <div className="flex items-center gap-0.5"></div>
                  <div className="flex items-center gap-0.5"></div>
                </div>
                <div className="grid items-center justify-items-start px-4">
                  <h1 className="text-base font-semibold lg:text-sm">{name}</h1>
                  <p className="text-sm text-justify lg:text-xs">{text_description}</p>
                  <h3>$ {buy_price}</h3>
                </div>
                <div className="flex items-center justify-center px-4 w-full">
                  <a
                    href=""
                    target="_blank"
                    role={"button"}
                    className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </SplideSlide>
           ))} 
          </Splide>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
