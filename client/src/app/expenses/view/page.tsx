import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { IconButton, Link, Typography } from "@mui/material";
import { ArrowBack, MoneyOffSharp } from "@mui/icons-material";
import { ViewCategory } from "@/components/ViewCategory";

const getExpensesForTheDayWithCategory = async () => {
  const data = await fetch(process.env.SERVER_URI + "expenses/today/all/3");
  return data.json();
};

export default async function Daily() {
  const data = await getExpensesForTheDayWithCategory();

  return (
    <Container maxWidth="xl">
      <Box sx={{ maxWidth: "xl" }}>
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

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <ViewCategory data={data.data} />
        </Box>
      </Box>
    </Container>
  );
}
