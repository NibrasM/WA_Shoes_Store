import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Shoe.css";

function Shoe() {
  const [shoe, setShoe] = useState({});
  const params = useParams();
  const [name, setName] = useState(shoe.name);
  const [price, setPrice] = useState(shoe.price);
  const [id, setId] = useState("");
  const [picture, setPicture] = useState(shoe.picture);

  useEffect(() => {
    const itemData = async () => {
      const item = await fetch(
        `https://63f74cb5e40e087c958b9059.mockapi.io/shoes/${params.id}`
      );
      const res = await item.json();
      setShoe(res);
    };
    itemData();
  }, [params]);

  const editHandler = async (e) => {
    e.preventDefault();

    const item = await fetch(
      `https://63f74cb5e40e087c958b9059.mockapi.io/shoes/${shoe.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ picture, name, price }),
      }
    );
    if (item.ok) {
      // alert("Post updated successfully!");
      // let history = useHistory();
      // history.push("/shoes");
    } else {
      alert("Failed to update post.");
    }

    const res = await item.json();
    console.log(res);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();

    const item = await fetch(
      `https://63f74cb5e40e087c958b9059.mockapi.io/shoes/${shoe.id}`,
      {
        method: "DELETE",
      }
    );
    if (item.ok) {
      // alert("Post DELETED successfully!");
    } else {
      alert("Failed to DELETED post.");
    }

    const res = await item.json();
    console.log(res);
  };

  return (
    <div className="shoe-page">
      <div className="shoe-div">
        <img
          className="shoe-img"
          src={shoe.picture}
          alt="pic"
          width="100px"
          height="100px"
        />
        <h1>{shoe.name}</h1>
        <p>{shoe.price}$</p>
      </div>

      <input
        type="text"
        placeholder="Name..."
        style={{ margin: "20px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Picture..."
        style={{ margin: "20px" }}
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Price..."
        style={{ margin: "20px" }}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>

      <div className="btns-div">
        <Button variant="warning" onClick={editHandler}>
          Edit
        </Button>
        <Button variant="danger" onClick={deleteHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
}
export default Shoe;
