import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Expense } from "../../components/Expense";
import { Typography } from "@mui/material";

const getExpenses = async () => {
  const response = await fetch(process.env.SERVER_URI + "expenses");
  return response.json();
};

export default async function Expenses() {
  const data = await getExpenses();

  return (
    <Container maxWidth="xl">
      <Box sx={{ maxWidth: "xl" }}>
        <Typography variant="h5" component="h4" sx={{ mb: 1 }}>
          Am i spending too much ?
        </Typography>
        <Box sx={{ maxWidth: "lg", mb: 3 }}>
          <Expense data={data.data} />
        </Box>
      </Box>
    </Container>
  );
}
