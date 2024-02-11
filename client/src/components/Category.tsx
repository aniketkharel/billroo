"use client";

import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React from "react";

interface Data {
  id: string;
  name: string;
}

export const Category = (props: { data: [Data] }) => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 357 }}>
        <InputLabel id="category-label">Categories</InputLabel>
        <Select labelId="category-label" id="category-label-id" value={category} label="Categories" onChange={handleChange}>
          {props.data ? (
            props.data.map((exp) => (
              <MenuItem sx={{ textTransform: "capitalize" }} key={exp.id} value={exp.id}>
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
    </Box>
  );
};
