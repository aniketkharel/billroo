import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { IconButton, Link, Typography } from "@mui/material";
import { ArrowBack, CategorySharp } from "@mui/icons-material";
import { Category } from "@/components/Category";

const getCategories = async () => {
  const result = await fetch(process.env.SERVER_URI + "categories");
  return result.json();
};

export default async function Expenses() {
  const data = await getCategories();

  return (
    <Container maxWidth="xl">
      <Box sx={{ maxWidth: "xl" }}>
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
        <Box>
          <Category data={data.data} />
        </Box>
      </Box>
    </Container>
  );
}
