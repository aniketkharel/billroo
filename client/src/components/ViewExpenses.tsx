"use client";

import { AddSharp, Edit } from "@mui/icons-material";
import { Box, Button, IconButton, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
import { EditExpense } from "./EditExpense";

interface Data {
  expense_id: number;
  amount: number;
  category_id: number;
  date: Date;
  category_name: string;
}

export const ViewExpenses = (props: { data: [Data] }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Data>({
    expense_id: 0,
    amount: 0,
    category_id: 0,
    date: new Date(),
    category_name: "",
  });

  const openEditor = () => {
    setOpen(true);
  };

  return (
    <Box maxWidth={"md"}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 420 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Amount&nbsp;($)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.length ? (
              props.data.map((row) => (
                <TableRow key={row.expense_id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ textTransform: "capitalize" }}>
                    {row.category_name}
                  </TableCell>
                  <TableCell>
                    <b>{row.amount}</b> $
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        openEditor();
                        setData({
                          category_id: row.category_id,
                          category_name: row.category_name,
                          expense_id: row.expense_id,
                          amount: row.amount,
                          date: row.date,
                        });
                      }}
                    >
                      <Edit color="primary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>You haven't added any expenses.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 4 }}>
        <Link href="/expenses/add">
          <Button variant="outlined">
            <AddSharp /> &nbsp; Add Expenses
          </Button>
        </Link>
      </Box>
      <EditExpense data={data} open={open} setOpen={setOpen} />
    </Box>
  );
};
