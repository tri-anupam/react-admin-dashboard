import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tables = () => {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX522_.jpg",
      customer: "Amar Doe",
      date: "2 May",
      amount: "$220",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX522_.jpg",
      customer: "Amar Doe",
      date: "2 May",
      amount: "$220",
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 3,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX522_.jpg",
      customer: "Amar Doe",
      date: "2 May",
      amount: "$220",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 4,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX522_.jpg",
      customer: "Amar Doe",
      date: "2 May",
      amount: "$220",
      method: "Cash on Delivery",
      status: "Rejected",
    },
    {
      id: 5,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX522_.jpg",
      customer: "Amar Doe",
      date: "2 May",
      amount: "$220",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 6,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX522_.jpg",
      customer: "Amar Doe",
      date: "2 May",
      amount: "$220",
      method: "Cash on Delivery",
      status: "Rejected",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id.</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Method</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}.
              </TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">
                <img
                  //   src="https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX522_.jpg"
                  src={row.img}
                  height={50}
                />
              </TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.method}</TableCell>
              <TableCell align="right">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
