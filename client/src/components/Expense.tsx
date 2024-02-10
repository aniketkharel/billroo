"use client";

import React from "react";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";

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
          <>
            <ListItem sx={{ textTransform: "capitalize" }}>
              <Typography variant="h6">
                {exp.amount} {exp.date.toString()}
              </Typography>
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
    </Box>
  );
};
