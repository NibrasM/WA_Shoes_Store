import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);

  const a = [];

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

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="shoes-div">
      {shoes.slice(0, 5).map((shoe) => (
        <Link className="shoe-div-link" to={`/Shoe/${shoe.id}`}>
          <div className="shoe-div" key={shoe.id}>
            <img src={shoe.picture}></img>
            <h3>{shoe.name} </h3>
            <p>{shoe.price} $</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Home;
