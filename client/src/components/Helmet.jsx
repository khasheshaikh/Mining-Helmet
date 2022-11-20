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
            <Card>
              <Card.Text>
                IR Sensor module has great adaptive capability of the ambient
                light, having a pair of infrared transmitter and the receiver
                tube, the infrared emitting tube to emit a certain frequency,
                encounters an obstacle detection direction (reflecting surface),
                infrared reflected back to the receiver tube receiving, after a
                comparator circuit processing, the green LED lights up, while
                the signal output will output digital signal (a low-level
                signal), through the potentiometer knob to adjust the detection
                distance, the effective distance range 2 ~ 10cm working voltage
                of 3.3V-5V.
              </Card.Text>
            </Card>
          </Col>
          <Col md="1"></Col>
          <Col md="6">
            <img src="ir.jpeg" height="300px" />
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
