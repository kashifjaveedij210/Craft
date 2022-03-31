import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./Craft.css";

const Craft = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const GetApi = async () => {
    // const result= await axios.get("https://72ih8opnm2.execute-api.ap-south-1.amazonaws.com/live")
    const result = await axios.get("https://fakestoreapi.com/products");
    // console.log(result)
    console.log(result);
    setData(result.data);
  };
  useEffect(() => {
    GetApi();
  }, []);
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase().trim())
    );
    setData(filtered);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="inpt"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="crd">
        {data.map((item) => {
          return (
            <div className="crd2">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ width: "250px", height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description.substr(0, 20)}</Card.Text>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Craft;
