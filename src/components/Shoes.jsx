import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shoes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);

  const getItems = () => {
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
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(shoes);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        {shoes.map((shoe) => (
          <Link to={`/Shoe/${shoe.id}`}>
            <div
              key={shoe.id}
              style={{ display: "flex", border: "1px solid black" }}
            >
              <div> {shoe.id}</div>
              <div>{shoe.name} </div>
              <img src={shoe.picture}></img>
              <span>{shoe.price}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};

export default Shoes;
