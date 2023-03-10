import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);

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
    <div className="home-page">
      <img
        className="home-page-img"
        src="https://cdn.shopify.com/s/files/1/0519/7896/1049/files/e907ceb95306db90e4c8c13ba1d693ef_1350x473.gif?v=1675585770"
        alt="shoes"
      />
      <div className="shoes-div">
        {shoes.slice(0, 5).map((shoe) => (
          <Link className="shoe-div-link" to={`/Shoe/${shoe.id}`}>
            <div className="shoe-div-home" key={shoe.id}>
              <img
                className="shoe-img-home"
                src={shoe.picture}
                alt={shoe.name}
              ></img>
              <h3>{shoe.name} </h3>
              <p>{shoe.price} $</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;
