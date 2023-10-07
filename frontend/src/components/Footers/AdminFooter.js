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
/*eslint-disable*/

// reactstrap components 
import React, { useState, useEffect } from 'react';
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
const today = new Date();
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];
const tahun = today.getFullYear();
const bulan = months[today.getMonth()]; // Ingatlah bahwa bulan dimulai dari 0 (Januari adalah bulan 0), jadi tambahkan 1.
const tanggal = today.getDate();
const Footer = () => {
  
  const [currentTime, setCurrentTime] = useState(new Date()); 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update setiap 1 detik 
    return () => {
      clearInterval(intervalId); // Membersihkan interval saat komponen tidak lagi digunakan
    };
  }, []);

  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
            <Col xl="8">
              <div className="copyright text-center text-xl-left text-muted">
                © {tanggal} {bulan} {tahun}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="#"
                  target="_blank"
                >
                  AERTRAX PT GIWANG KANAKA Marketing and Technical Support
                </a>
              </div>
            </Col>
            <Col xl="4">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">   
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    {currentTime.toLocaleTimeString()} - WIB
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
    </footer>
  );
};

export default Footer;
