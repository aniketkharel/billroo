"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, IconButton, Link, TextField, Typography } from "@mui/material";
import { AddOutlined, ArrowBack, CoffeeSharp, FoodBankSharp, WineBarSharp } from "@mui/icons-material";
import { FormEvent } from "react";

export default function Expenses() {
  const [coffee, setCoffee] = React.useState("");
  const [food, setFood] = React.useState("");
  const [alcohol, setAlcohol] = React.useState("");

  // @TODO first fetch expenses for each category for current date
  const getExpensesForTheDay = async () => {
    console.log("GET For the current date");
  };

  const addExpenseForTheDay = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("coffee", coffee!.toString());
    data.append("food", food!.toString());
    data.append("alcohol", alcohol!.toString());
    const result = await fetch(process.env.SERVER_URI + "expenses", { method: "POST", body: data });
    console.log(result.json());
  };

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
            <form style={{ display: "flex", flexDirection: "column", gap: 20 }} onSubmit={(e) => addExpenseForTheDay(e)}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Box width={100} display="flex" alignItems={"center"}>
                  <Box>Coffee</Box>
                  <CoffeeSharp />: &nbsp;
                </Box>
                <Box>
                  <TextField size="small" placeholder="Coffee" type="text" onChange={(e) => setCoffee(e.target.value)} value={coffee} />
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Box width={100} display="flex" alignItems={"center"}>
                  <Box>Food</Box>
                  <FoodBankSharp />: &nbsp;
                </Box>
                <Box>
                  <TextField size="small" placeholder="Food" type="text" onChange={(e) => setFood(e.target.value)} value={food} />
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Box width={100} display="flex" alignItems={"center"}>
                  <Box>Alcohol</Box>
                  <WineBarSharp />: &nbsp;
                </Box>
                <Box>
                  <TextField size="small" placeholder="Alcohol" type="text" onChange={(e) => setAlcohol(e.target.value)} value={alcohol} />
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
