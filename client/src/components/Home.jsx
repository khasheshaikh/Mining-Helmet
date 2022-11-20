import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div class="jumbotron">
        <Row>
          <Col md="5">
            <h1 class="display-4">MINING Helmet 2.0</h1>
            <p class="lead">
              Safety of workers should always be of major consideration in any
              form of mining. Underground mining operations proves to be a risky
              venture as far as the safety and health of workers are concerned.
              These risks are due to different techniques used for extracting
              different minerals. The deeper the mine, the greater is the risk.
            </p>
            <hr class="my-4"></hr>
            <p>
              These safety issues are of grave concern especially in case of
              coal industries
            </p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </Col>
          <Col md="1"></Col>
          <Col md="6">
            <div>
              <img src="helmet.png" height="500px" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
