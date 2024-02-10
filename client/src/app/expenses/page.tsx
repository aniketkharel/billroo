import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Expense } from "../../components/Expense";
import { IconButton, Typography } from "@mui/material";
import { AddBoxOutlined, MoneySharp } from "@mui/icons-material";
import Link from "next/link";

const getExpenses = async () => {
  const response = await fetch(process.env.SERVER_URI + "expenses");
  return response.json();
};

export default async function Expenses() {
  const data = await getExpenses();

  return (
    <Container maxWidth="xl">
      <Box sx={{ maxWidth: "xl", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5" component="h4" sx={{ mb: 1, alignItems: "center", display: "flex", gap: 2 }}>
          <MoneySharp /> Am i spending too much ?
        </Typography>
        <Box>
          <Link href={"/expenses/add"}>
            <IconButton size="large" aria-label="Add Expenses">
              <AddBoxOutlined color="primary" fontSize="large" />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "lg", mb: 3 }}>
        <Expense data={data.data} />
      </Box>
    </Container>
  );
}
