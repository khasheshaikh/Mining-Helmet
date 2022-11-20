import React from "react";
import Table from "react-bootstrap/Table";
import { Row, Col, Card } from "react-bootstrap";
import "./Helmet.css";
export const Helmet = () => {
  return (
    <div>
      <div className="inside">
        <Row>
          <Col md="5">
            
              <p>
                IR Sensor module has great adaptive capability of the ambient
                light, having a pair of infrared transmitter and the receiver
                tube, the infrared emitting tube to emit a certain frequency,
                encounters an obstacle 
              </p>
            
          </Col>
          <Col md="1"></Col>
          <Col md="6">
            <img src="ir.jpeg" height="150px" />
          </Col>
        </Row>
      </div>
      <div className="table">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Helmet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bill</td>
              <td>james</td>
              <td>No</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
