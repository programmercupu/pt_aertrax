/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import ReactSpeedometer from "react-d3-speedometer"

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody className="justify-content-center">
                    <Row >
                    <div style={{
                          width: "500px",
                          height: "100px",
                          background: "#FFFFFF"
                        }}>
                          <ReactSpeedometer
                            fluidWidth={true}
                            minValue={100}
                            maxValue={300}
                            value={225}
                            needleColor="steelblue"
                          />
                        </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <CardBody className="justify-content-center">
                    <Row >
                    <div style={{
                          width: "500px",
                          height: "100px",
                          background: "#FFFFFF"
                        }}>
                          <ReactSpeedometer
                            fluidWidth={true}
                            minValue={100}
                            maxValue={400}
                            value={335}
                            needleColor="steelblue"
                          />
                        </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <CardBody className="justify-content-center">
                    <Row >
                    <div style={{
                          width: "500px",
                          height: "100px",
                          background: "#FFFFFF"
                        }}>
                          <ReactSpeedometer
                            fluidWidth={true}
                            minValue={50}
                            maxValue={500}
                            value={450}
                            needleColor="steelblue"
                          />
                        </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <CardBody className="justify-content-center">
                    <Row >
                    <div style={{
                          width: "500px",
                          height: "100px",
                          background: "#FFFFFF"
                        }}>
                          <ReactSpeedometer
                            fluidWidth={true}
                            minValue={100}
                            maxValue={300}
                            value={150}
                            needleColor="steelblue"
                          />
                        </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
