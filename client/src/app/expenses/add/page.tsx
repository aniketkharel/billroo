"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, IconButton, Link, TextField, Typography } from "@mui/material";
import { AddOutlined, ArrowBack, CoffeeSharp, FoodBankSharp, WineBarSharp } from "@mui/icons-material";

const postExpense = async () => {
  const response = await fetch(process.env.SERVER_URI + "expenses");
  return response.json();
};

const getExpense = async () => {
  const response = await fetch(process.env.SERVER_URI + "expenses");
  return response.json();
};

const addExpense = async (e: React.ChangeEvent) => {
  e.preventDefault();
  console.log(e);
};

export default async function Expenses() {
  const [coffee, setCoffee] = React.useState<number>(0.0);
  const [food, setFood] = React.useState<number>(0.0);
  const [alcohol, setAlcohol] = React.useState<number>(0.0);

  return (
    <Container maxWidth="xl">
      <Box sx={{ maxWidth: "xl" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" component="h4" sx={{ mb: 1, p: 0 }}>
            How much did I spend today ?
          </Typography>
          <Box>
            <Link href={"/expenses"}>
              <IconButton size="medium" aria-label="Go back">
                <ArrowBack color="primary" fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <form style={{ display: "flex", flexDirection: "column", gap: 20 }} onSubmit={addExpense}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Box width={100} display="flex" alignItems={"center"}>
                  <Box>Coffee</Box>
                  <CoffeeSharp />: &nbsp;
                </Box>
                <Box>
                  <TextField size="small" placeholder="Coffee" type="number" />
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Box width={100} display="flex" alignItems={"center"}>
                  <Box>Food</Box>
                  <FoodBankSharp />: &nbsp;
                </Box>
                <Box>
                  <TextField size="small" placeholder="Food" type="number" />
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Box width={100} display="flex" alignItems={"center"}>
                  <Box>Alcohol</Box>
                  <WineBarSharp />: &nbsp;
                </Box>
                <Box>
                  <TextField size="small" placeholder="Alcohol" type="number" />
                </Box>
              </Box>
              <Button variant="outlined" size="large" aria-label="Add Expenses" type="submit">
                <AddOutlined color="primary" fontSize="medium" /> Add
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
