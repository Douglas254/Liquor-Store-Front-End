import React from "react";

const SingleProduct = () => {
  return (
    <>
      <div className="flex mx-28 my-12">
        <div className="md:mr-10">
          <img
            className="rounded-lg"
            src="https://themewagon.github.io/liquorstore/images/prod-1.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold sm:text-2xl text-5xl">Bacardi 151 Degree</h1>
          <h3 className="my-3 text-2xl font-light">$120.00</h3>
          <p className="font-extralight">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. On her way she met a
            copy. The copy warned the Little Blind Text, that where it came from
            it would have been rewritten a thousand times and everything that
            was left from its origin would be the word "and" and the Little
            Blind Text should turn around and return to its own, safe country.
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>
          <div className="my-3 mx-14">
            <button className="border px-4 py-1 font-bold text-2xl">-</button>
            <button className="mx-2 px-12 border py-1 font-bold text-2xl">
              1
            </button>
            <button className="border px-4 py-1 font-bold text-2xl">+</button>
          </div>
          <div className="flex mx-3">
            <div className="mr-4 bg-[#B7472A] p-2 rounded-md text-white text-sm">
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
