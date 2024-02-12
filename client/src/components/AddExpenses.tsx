"use client";

import { AddSharp, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, FormControl, InputLabel, Link, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import DialogPop from "./Dialog";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

interface Data {
  id: string;
  name: string;
}

export const AddExpense = (props: { data: [Data] }) => {
  const [category, setCategory] = React.useState("");
  const [input, setInput] = React.useState<number>(0);
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [sev, setSev] = React.useState<OverridableStringUnion<AlertColor, AlertPropsColorOverrides>>("success");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const addExpense = async () => {
    const amount = input;
    if (category === "" || amount == undefined) {
      return setError(true);
    } else if (amount <= 0 || amount >= 101) {
      return setError(true);
    } else {
      setError(false);
      const response = await fetch(process.env.SERVER_URI + "expenses/today", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 3,
          cat_id: category,
          amount,
        }),
      });
      const data = await response.json();
      if (data.status == 403) {
        setOpen(true);
        setMessage(data.msg);
        setSev("warning");
      } else {
        setOpen(true);
        setMessage(data.msg);
        setSev("success");
      }
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 4 }}>
      <FormControl sx={{ minWidth: 357 }}>
        <DialogPop open={open} setOpen={setOpen} content={message} severity={sev} />
        <InputLabel id="category-label">Categories</InputLabel>
        <Select labelId="category-label" id="category-label-id" value={category} label="Categories" onChange={handleChange}>
          {props.data ? (
            props.data.map((exp) => (
              <MenuItem key={exp.id} value={exp.id}>
                <Typography variant="h6">{exp.name}</Typography>
              </MenuItem>
            ))
          ) : (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <Box>
        <TextField
          sx={{ width: "35ch" }}
          required
          error={error}
          id="outlined-required"
          type="number"
          label="Amount ($)"
          defaultValue={input}
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
      </Box>
      <Box display={"flex"} flexDirection={"row"} gap={4} alignContent={"center"} justifyContent={"center"}>
        <Button variant="outlined" onClick={addExpense}>
          <AddSharp /> Add
        </Button>

        <Link href="/expenses/view">
          <Button variant="outlined">
            <RemoveRedEye /> &nbsp; Go to Today's expenses
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
