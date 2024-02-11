import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton, Link, Typography } from "@mui/material";
import { ArrowBack, MoneyOffSharp } from "@mui/icons-material";
import { ViewExpenses } from "@/components/ViewExpenses";

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-route-handlers, learned about it today
const getExpensesForTheDayWithCategory = async () => {
  const data = await fetch(process.env.SERVER_URI + "expenses/today/all/3", { cache: "no-cache" });
  return data.json();
};

export default async function Daily() {
  const data = await getExpensesForTheDayWithCategory();

  return (
    <Box sx={{ maxWidth: "xl" }}>
      <Box sx={{ maxWidth: "xl", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
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
        <ViewExpenses data={data.data} />
      </Box>
    </Box>
  );
}
