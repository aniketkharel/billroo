import * as React from "react";
import Box from "@mui/material/Box";
import { Expense } from "../../components/Expense";
import { Button, Typography } from "@mui/material";
import { AddBoxOutlined, MoneySharp } from "@mui/icons-material";
import Link from "next/link";

export default async function Expenses() {
  return (
    <>
      <Box sx={{ maxWidth: "md", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
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
      <Box sx={{ mb: 3, mt: 4, mx: "auto" }}>
        <Expense />
      </Box>
    </>
  );
}
