import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";

const Shoes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [added, setAdded] = useState(false);
  const [pic, setPic] = useState(
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg"
  );
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

  useEffect(() => {
    getItems();
  }, [added]);

  console.log(shoes);

  const addHandler = async (e) => {
    setAdded(false);
    e.preventDefault();

    const item = await fetch(
      `https://63f74cb5e40e087c958b9059.mockapi.io/shoes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pic, name, price }),
      }
    );
    if (item.ok) {
      alert("Post Add successfully!");
      setAdded(true);
      setName("");
      setPrice("");
    } else {
      alert("Failed to Add post.");
    }

    const res = await item.json();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <button onClick={() => setButtonPopup(true)}> + Add Shoe</button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>My popup</h3>
          <input
            type="text"
            placeholder="Name..."
            style={{ margin: "20px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Price..."
            style={{ margin: "20px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <button onClick={addHandler}>Add</button>
        </Popup>
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
