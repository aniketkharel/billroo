"use client";

import { Box, List, ListItem } from "@mui/material";
import React from "react";

interface Data {
  _id: string;
  amount: number;
  user_id: number;
  date: Date;
  category_id: number;
}

export const Expense = (props: { data: [Data] }) => {
  return (
    <Box>
      <List>
        {props.data.map((exp) => (
          <ListItem>
            {exp.amount} {exp.date}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
