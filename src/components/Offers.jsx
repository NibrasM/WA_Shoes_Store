import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Offers.css";
export default function Offers() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [updateShoePrice, setUpdateShoePrice] = useState([]);

  function getItems() {
    fetch("https://63f74cb5e40e087c958b9059.mockapi.io/shoes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setShoes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }
  function updateShoePriceFun() {
    setUpdateShoePrice(
      shoes.map((shoe) => {
        return shoe.price - shoe.price * 0.15;
      })
    );
  }

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    updateShoePriceFun();
  });

  return (
    <div className="home-page">
      <img
        className="offers-page-img"
        src="https://mmedia.moneyback.com.hk//moneyBack/image/offer/629047f5-51bc-41ea-b704-9dee7da027fb.jpg"
        alt="shoes"
      />
      <div className="shoes-div">
        {shoes.slice(5, 10).map((shoe, index) => (
          <Link className="shoe-div-link" to={`/Shoe/${shoe.id}`}>
            <div className="shoe-div-offers" key={shoe.id}>
              <img
                className="shoe-img-offers"
                src={shoe.picture}
                alt={shoe.name}
              ></img>
              <h3>{shoe.name} </h3>
              <p style={{ textDecoration: "line-through", color: "red" }}>
                {shoe.price} $
              </p>
              <p>{updateShoePrice[index + 5]} $</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
