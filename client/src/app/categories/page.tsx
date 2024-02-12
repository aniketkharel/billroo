import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { ArrowBack, CategorySharp } from "@mui/icons-material";
import { Category } from "@/components/Category";
import Link from "next/link";

const getCategories = async () => {
  const result = await fetch(process.env.SERVER_URI + "categories");
  return result.json();
};

export default async function Expenses() {
  const data = await getCategories();

  return (
    <Box sx={{ maxWidth: "md" }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5" component="h4" sx={{ mb: 1, p: 0, alignItems: "center", display: "flex", gap: 2 }}>
          <CategorySharp fontSize="medium" />
          Your Categories
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
        <Category data={data.data} />
      </Box>
    </Box>
  );
}
