import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";
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
      <div className="flex flex-wrap">
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
                      <img
                        src={image}
                        alt={`product ${id}`}
                        className="w-full h-[200px] border-t border-x"
                      />
                      <p className="font-bold text-2xl">{name}</p>
                      <h3>Ksh. {buy_price}</h3>
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
                      <img
                        src={image}
                        alt={`product ${id}`}
                        className="w-full h-[200px] border-t border-x"
                      />
                      <p className="font-bold text-xl text-center">{name}</p>
                      <h3 className="font-bold">Ksh. {buy_price}</h3>
                      <h6 className="font-bold">
                        In Stock {quantity_in_stock}
                      </h6>
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
