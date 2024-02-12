import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { ArrowBack, MoneyOffSharp } from "@mui/icons-material";
import { ViewExpenses } from "@/components/ViewExpenses";
import Link from "next/link";

export default async function Daily() {
  return (
    <Box sx={{ maxWidth: "sm" }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5" component="h5" sx={{ mb: 1, p: 0, alignItems: "center", display: "flex", gap: 2 }}>
          <MoneyOffSharp /> Expenses for,
          <Typography sx={{ fontStyle: "inherit", fontWeight: "bold", fontSize: "1em" }}>{new Date().toDateString()}</Typography>
        </Typography>
        <Box>
          <Link href={"/expenses"}>
            <IconButton size="medium" aria-label="Go back">
              <ArrowBack color="primary" fontSize="large" />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box sx={{ mt: 4, mx: "auto" }}>
        <ViewExpenses />
      </Box>
    </Box>
  );
}
