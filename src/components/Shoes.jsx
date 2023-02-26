import { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import { Button } from "react-bootstrap";
import "./Shoes.css";

function Shoes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [added, setAdded] = useState(false);
  const [picture, setPicture] = useState("");

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

  // const handleFileInputChange = (event) => {
  //   setPic(event.target.files[0]);
  // };
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
        body: JSON.stringify({ picture, name, price }),
      }
    );
    if (item.ok) {
      // alert("Post Add successfully!");
      setAdded(true);
      setName("");
      setPrice("");
      setPicture("");
    } else {
      alert("Failed to Add post.");
    }

    const res = await item.json();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="shoes-page-content">
        <Button variant="success" onClick={() => setButtonPopup(true)}>
          + Add Shoe
        </Button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Add Shoe</h3>
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

          <input
            type="text"
            placeholder="Picture URL..."
            style={{ margin: "20px" }}
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          ></input>
          {/* <input
            type="file"
            placeholder="Picture..."
            style={{ margin: "20px" }}
            value={undefined}
            onChange={handleFileInputChange}
          ></input> */}

          <Button variant="success" onClick={addHandler}>
            Add
          </Button>
        </Popup>
        <div className="shoes-div">
          {shoes.map((shoe) => (
            <Link className="shoe-div-link" to={`/Shoe/${shoe.id}`}>
              <div className="shoe-div" key={shoe.id}>
                <img className="shoe-img" src={shoe.picture}></img>
                <h3>{shoe.name} </h3>
                <p>{shoe.price} $</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Shoes;
