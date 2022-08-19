import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, number, district) {
  return { name, number, district };
}

const rows = [
  createData("Andhra Pradesh ", 159, "Vizianagaram, Visakhapatanam, Krishna, Anantapur, Kurnool, West Godavari, Prakasam, Srikakulam, Spsr Nellore, Guntur, East Godavari, Chittoor "),
  createData("Ice cream sandwich", 237, "	Lakhimpur, Nagaon, Kamrup Metro, Nalbari, Bongaigaon "),
  createData("Eclair", 262, "Araria, Samastipur, Purbi Champaran, Kishanganj, Banka, Saran, Bhagalpur, Jamui, Nawada, Madhepura, Supaul, Patna, Nalanda, Madhubani, Muzaffarpur, Darbhanga, Sitamarhi, Purnia, Saharsa, Pashchim Champaran, Gaya, Khagaria, Begusarai "),
  createData("Cupcake", 305, "Raigarh, Dantewada, Rajnandgaon, Durg, Bilaspur, Korba, Surguja, Raipur "),
  createData("Gingerbread", 356, "	New Delhi "),
  createData("Gingerbread", 356, "Vadodara, Banas Kantha, Surat, Rajkot, Kachchh, Ahmadabad, Panch Mahals, Dohad, Bhavnagar "),
  createData("Gingerbread", 356, "Faridabad, Panipat, Gurugram  ")

];

const Acts = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name of the state</TableCell>
              <TableCell align="right">No. of Districts</TableCell>
              <TableCell align="right">Name of District</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.district}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Acts;
