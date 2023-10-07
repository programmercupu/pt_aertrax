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
import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx"; 
import jsPDF from "jspdf";
import "jspdf-autotable"; 
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,

} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tabless = () => {

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  

  useEffect(() => {
    // Lakukan permintaan HTTP untuk mengambil data dari URL
    axios
      .get("https://api.aqms.giwangkanaka.co.id/api/vmv_aertrax")
      .then((response) => {
        // Tangani respons data di sini
        const responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        // Tangani kesalahan jika terjadi
        console.error(error);
      });
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Kembali ke halaman pertama saat melakukan pencarian
  };

  const filteredData = data.filter((item) =>
  item.tanggal.toString().includes(searchQuery)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const renderTableData = currentItems.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.Stasiun}</td>
        <td>{item.Waktu}</td>
        <td>{item.PM10}</td>
        <td>{item["PM2,5"]}</td>
        <td>{item.SO2}</td>
        <td>{item.CO}</td>
        <td>{item.O3}</td>
        <td>{item.NO2}</td>
        <td>{item.HC}</td>
        <td>{item.WindSpeed}</td>
        <td>{item.WindDirection}</td>
        <td>{item.stat_pm10}</td>
        <td>{item.stat_pm25}</td>
        <td>{item.stat_so2}</td>
        <td>{item.stat_co}</td>
        <td>{item.stat_no3}</td>
        <td>{item.stat_hc}</td>
        <td>{item.humidity}</td>
        <td>{item.temperature}</td>
        <td>{item.pressure}</td>
        <td>{item.solarradiation}</td>
        <td>{item.rain_intensity}</td> 
        <td>{item.jam}</td>
        <td>{item.tanggal}</td>
      </tr>
    );
  });


   const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "EksportVMV.csv");
  };

  // Fungsi untuk mengekspor data ke Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
    XLSX.writeFile(workbook, "DataVMV.xlsx");
  };

  // Fungsi untuk mengekspor data ke PDF
  const exportToPDF = () => {
    
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });
    const maxWidth = doc.internal.pageSize.width - 10;
    doc.text("Tabel VMV Aertrax", 10, 10); // Judul tabel
    //let y=10;
    doc.autoTable({ 
      
      styles: { fontSize: 8 }, // Mengatur ukuran teks menjadi 11
      head: [
        ["Stasiun", "PM10", "PM2,5","SO2", "CO","O3","NO2", "HC", "Windspeed", "WindDirection", "Hunmidity", "Temperature", "Pressure", "SolarRadiation", "Rain Intensity",  "Jam", "Tanggal",],
        // Sisipkan judul-judul kolom lainnya di sini
        //"Waktu", 
        //"Av-PM10", "AV-PM2,5", "AV-SO2", "AV-CO", "AV-O3", "AV-NO2", "AV-HC",
      ],
      
      body: filteredData.map((item) => [
        item.Stasiun,
        //item.Waktu,
        item.PM10,
        item["PM2,5"],
        item.SO2,
        item.CO,
        item.O3,
        item.NO2,
        item.HC,
        item.WindSpeed,
        item.WindDirection,
        item.Humidity,
        item.Temperature,
        item.Pressure,
        item.SolarRadiation,
        item["Rain Intensity"],
        // item.AvailabilityPM10,
        // item["AvailabilityPM2,5"],
        // item.AvailabilitySO2,
        // item.AvailabilityCO,
        // item.AvailabilityO3,
        // item.AvailabilityNO2,
        // item.AvailabilityHC,
        item.Jam,
        item.Tanggal
        // Sisipkan nilai-nilai kolom lainnya di sini
      ]),
    });
    // doc.setFontSize(16);
    // doc.text("Tabel HMV Aertrax", 10, y);
    // y += 10;

    // // Mendapatkan HTML dari tabel
    // const table = document.getElementById("data-table");

    // // Mengkonversi tabel HTML ke PDF
    // doc.autoTable({ html: table, startY: y, theme: "grid" });
    doc.save("DataVMV.pdf");
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <PaginationItem
        key={number}
        className={number === currentPage ? "active" : ""}
      >
        <PaginationLink onClick={() => handleChangePage(number)}>
          {number}
        </PaginationLink>
      </PaginationItem>
    );
  });

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow" >
            <CardHeader className="border-0">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Tulisan "Tabel HMV Aertrax" */}
                  <h3 className="mb-0">VMV Aertrax</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Tombol Export to CSV */}
                    <Button color="primary" className="mr-2" onClick={exportToCSV}>
                      Export to CSV
                    </Button>
                    {/* Tombol Export to Excel */}
                    <Button color="success" className="mr-2" onClick={exportToExcel}>
                      Export to Excel
                    </Button>
                    {/* Tombol Export to PDF */}
                    <Button color="danger" onClick={exportToPDF}>
                      Export to PDF
                    </Button>
                  </div>
                </div>
                <InputGroup className="input-group-alternative mt-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="Search by Tanggal ( ex : YYYY-MM-DD )"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </InputGroup>
              </CardHeader> 
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Stasiun</th>
                    <th scope="col">Waktu</th>
                    <th scope="col">PM10</th>
                    <th scope="col">PM2,5</th>
                    <th scope="col">SO2</th>
                    <th scope="col">CO2</th>
                    <th scope="col">O3</th>
                    <th scope="col">NO2</th>
                    <th scope="col">HC</th>
                    <th scope="col">WindSpeed</th>
                    <th scope="col">WindDirection</th>
                    <th scope="col">stat_pm10</th>
                    <th scope="col">stat_pm25</th>
                    <th scope="col">stat_so2</th>
                    <th scope="col">stat_co</th>
                    <th scope="col">stat_o3</th>
                    <th scope="col">stat_no2</th>
                    <th scope="col">stat_hc</th>
                    <th scope="col">Humidity</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Pressure</th>
                    <th scope="col">SolarRadiation</th>
                    <th scope="col">Rain Intensity</th> 
                    <th scope="col">Jam</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>{renderTableData}</tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className={currentPage === 1 ? "disabled" : ""}>
                      <PaginationLink
                        href="#pablo"
                        onClick={() =>
                          handleChangePage(currentPage - 1)
                        }
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {renderPageNumbers}
                    <PaginationItem
                      className={
                        currentPage === Math.ceil(filteredData.length / itemsPerPage)
                          ? "disabled"
                          : ""
                      }
                    >
                      <PaginationLink
                        href="#pablo"
                        onClick={() =>
                          handleChangePage(currentPage + 1)
                        }
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        
      </Container>
    </>
  );
};

export default Tabless;
