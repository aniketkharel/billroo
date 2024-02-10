"use client";

import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  Paper,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

interface Data {
  expense_id: string;
  amount: number;
  category_id: number;
  date: Date;
  category_name: string;
}

export const ViewCategory = (props: { data: [Data] }) => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Amount&nbsp;($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.length ? (
              props.data.map((row) => (
                <TableRow key={row.expense_id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ textTransform: "capitalize" }}>
                    {row.category_name}
                  </TableCell>
                  <TableCell>{row.amount} $</TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell>You haven't added any expenses.</TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
