"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import DialogPop from "./Dialog";
import { useRouter } from "next/navigation";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

interface Data {
  expense_id: number;
  amount: number;
  category_id: number;
  category_name: string;
}

export const EditExpense = (props: { data: Data; setOpen: React.Dispatch<React.SetStateAction<boolean>>; open: boolean }) => {
  const [input, setInput] = useState(props.data.amount);
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [sev, setSev] = React.useState<OverridableStringUnion<AlertColor, AlertPropsColorOverrides>>("success");
  const router = useRouter();

  const handleClose = () => {
    props.setOpen(false);
    setInput(0);
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
          user_id: 3,
          exp_id: props.data.expense_id,
          amount: input,
        }),
      });
      const data = await response.json();
      if (data.status == 200) {
        setOpen(true);
        setMessage(data.msg);
        setSev("success");
        handleClose();
        router.refresh();
      } else {
        setOpen(true);
        setMessage(data.msg);
        setSev("error");
        handleClose();
      }
    }
  };

  return (
    <>
      <DialogPop open={open} setOpen={setOpen} content={message} severity={sev} />
      <Dialog
        open={props.open}
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
            <b>{props.data.category_name}</b>
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
    </>
  );
};
