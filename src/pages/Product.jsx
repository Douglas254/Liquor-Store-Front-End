import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios
      .get(`https://liquorstorev1.pythonanywhere.com/product`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div>
      <div className="flex justify-end items-center mx-2 border-b my-4">
        <FcSearch size={32} />
        <input
          placeholder="Search Product"
          onChange={(e) => searchItems(e.target.value)}
          className="outline-none"
        />
      </div>
      <div className="flex">
        {searchInput.length > 1
          ? filteredResults.map(
              ({
                buy_price,
                image,
                name,
                quantity_in_stock,
                text_description,
                id,
              }) => {
                return (
                  <>
                    <div className="w-1/4 px-8 relative my-12" key={id}>
                      <img src={image} alt={`product ${id}`} />
                      <p>{name}</p>
                      <h3>$. {buy_price}</h3>
                      <h6>In Stock {quantity_in_stock}</h6>
                      <p>{text_description}</p>
                      <Link to={`product/${id}`}>
                        <button className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5">
                          Details
                        </button>
                      </Link>
                    </div>
                  </>
                );
              }
            )
          : APIData.map(
              ({
                buy_price,
                image,
                name,
                quantity_in_stock,
                text_description,
                id,
              }) => {
                return (
                  <>
                    <div className="w-1/4 px-8 relative my-12" key={id}>
                      <img src={image} alt={`product ${id}`} />
                      <p>{name}</p>
                      <h3>$. {buy_price}</h3>
                      <h6>In Stock {quantity_in_stock}</h6>
                      <p>{text_description}</p>

                      <Link to={`/singleproduct/${id}`}>
                        <button className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5">
                          Details
                        </button>
                      </Link>
                    </div>
                  </>
                );
              }
            )}
      </div>
    </div>
  );
}

// /** @format */

// import { useContext, useEffect, useState } from "react";
// // import "./Product.css";
// import axios from "axios";
// import { Cartcontext } from "../context/Context";

// const Product = () => {
//   const [data, setdata] = useState([]);
//   const fetchData = async () => {
//     const response = await axios.get(
//       "https://liquorstorev1.pythonanywhere.com/product"
//     );
//     setdata(response.data);
//     console.log(data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const Globalstate = useContext(Cartcontext);
//   const dispatch = Globalstate.dispatch;
//   console.log(Globalstate);
//   return (
//     <div className="home">
//       <div className="flex flex-wrap">
//         {data.map(
//           ({ buy_price, image, name, quantity_in_stock, text_description,id }) => {
//             quantity_in_stock = 1;
//             return (
//               <>

//                 <div className="w-1/4 px-8 relative my-12" key={id}>
//                   <img src={image} alt={`product ${id}`} />
//                   <p>{name}</p>
//                   <h3>$. {buy_price}</h3>
//                   <h6>In Stock {quantity_in_stock}</h6>
//                   <p>{text_description}</p>

//                   <button
//                     className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5"
//                     onClick={() => dispatch({ type: "ADD", payload: item })}
//                   >
//                     add to cart
//                   </button>
//                 </div>
//               </>
//             );
//           }
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;
