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
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check username and password
    if (username === 'dlh_cilacap' && password === '@dlh_cilacap-aertrax2023') {
      // Autentikasi berhasil, arahkan ke dashboard
      navigate('/admin');
      setLoginSuccess(true);
    } else {
      // Autentikasi gagal, Anda dapat menambahkan pesan kesalahan atau tindakan lain di sini
      alert('Autentikasi gagal. Pastikan username dan password Anda benar.');
    }
  }; 
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0"> 
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small><b>Log in with credentials</b></small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Username"
                    type="text"
                    autoComplete="new-text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                     placeholder="Password"
                     type="password"
                     autoComplete="new-password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div> */}
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={handleLogin}>
                  Log in Now
                </Button>
              </div>
            </Form>
            {loginSuccess && (
              <div className="alert alert-success" role="alert">
                Login berhasil!
              </div>
      )}
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <NavLink
              className="text-light"
              to="/auth/register"
              tag={Link}
            >
              <small>Create new account</small>
            </NavLink>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
