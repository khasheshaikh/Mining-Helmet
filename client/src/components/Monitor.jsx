import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./Monitor.css";

export const Monitor = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:4000")
        .then((res) => res.json())
        .then((ress) => {
          console.log(ress);
          setData(ress);
        });
    }, 2000);
  });

  return (
    <div className="cardcontainer">
      <div>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>{data.temperature}C</Card.Title>
            <Card.Title>Temperature</Card.Title>
            {data.temperature > 50 ? (
              <Card.Text>Safe</Card.Text>
            ) : (
              <Card.Text>Not Safe</Card.Text>
            )}

            <Card.Text>
              if temperature in mines rises above 50 it will become dangerous
              for miners to stay their but our monitoring will alert them.
            </Card.Text>
            <Button variant="dark">Check</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>{data.humidity}%</Card.Title>
            <Card.Title>Humidity</Card.Title>
            {data.humidity > 50 ? (
              <Card.Text>Unsafe</Card.Text>
            ) : (
              <Card.Text> Safe</Card.Text>
            )}

            <Card.Text>
              if humidity rises above 50 % in air then breathing becomes
              difficult and can lead to death.
            </Card.Text>
            <Button variant="dark">Check</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>{data.methane}%</Card.Title>
            <Card.Title>Methane </Card.Title>
            {data.methane > 50 ? (
              <Card.Text>Safe</Card.Text>
            ) : (
              <Card.Text>Not Safe</Card.Text>
            )}
            <Card.Text>
              If the concentration of methane rises above 15% it is poisonous
              and dangerous it is also highly flamable
            </Card.Text>
            <Button variant="dark">Check</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
