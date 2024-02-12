"use client";

import { AddSharp, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUserContext } from "@/user";
import {} from "@mui/material";
import DialogPop from "./Dialog";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import Link from "next/link";

interface Data {
  expense_id: number;
  amount: number;
  category_id: number;
  date: Date;
  category_name: string;
}

export const ViewExpenses = () => {
  const [open, setOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const { id } = useUserContext();
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [sev, setSev] = React.useState<OverridableStringUnion<AlertColor, AlertPropsColorOverrides>>("success");

  const handleClose = () => {
    setOpen(false);
    setInput(undefined);
  };

  const updateExpense = async () => {
    const amount = input;
    if (amount == undefined) {
      return setError(true);
    } else if (amount <= 0 || amount >= 101) {
      return setError(true);
    } else {
      const response = await fetch(process.env.SERVER_URI + "expenses/today", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: id,
          exp_id: upData?.expense_id,
          amount: input,
        }),
      });
      const data = await response.json();
      if (data.status == 200) {
        setOpenToast(true);
        setMessage(data.msg);
        setSev("success");
        handleClose();
        getExpenses();
      } else {
        setOpenToast(true);
        setMessage(data.msg);
        setSev("error");
        handleClose();
      }
    }
  };
  const [data, setData] = useState<[Data] | undefined>(undefined);
  const [upData, setUpData] = useState<Data | undefined>(undefined);

  const [input, setInput] = useState(() => {
    return upData?.amount;
  });

  const getExpenses = async () => {
    const response = await fetch(process.env.SERVER_URI + `expenses/today/all/${id}`, { cache: "no-cache" });
    const data = await response.json();
    setData(data.data);
  };

  useEffect(() => {
    getExpenses();
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
            {data && data?.length ? (
              data?.map((row) => (
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
                        setUpData({
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
      <DialogPop open={openToast} setOpen={setOpenToast} content={message} severity={sev} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            updateExpense();
          },
        }}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>{upData?.category_name}</b>
          </DialogContentText>
          <TextField
            autoFocus
            required
            error={error}
            margin="dense"
            id="amount"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="filled"
            value={input}
            onChange={(e) => setInput(parseInt(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
