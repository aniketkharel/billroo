import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Expense } from "../../components/Expense";
import { Button, Typography } from "@mui/material";
import { AddBoxOutlined, MoneySharp } from "@mui/icons-material";
import Link from "next/link";

const getExpenses = async () => {
  const userId: number = 3;
  const response = await fetch(process.env.SERVER_URI + `expenses/${userId}`);
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
            <Button variant="outlined">
              <AddBoxOutlined color="primary" fontSize="medium" /> Add
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "lg", mb: 3, mt: 4 }}>
        <Expense data={data.data} />
      </Box>
    </Container>
  );
}
