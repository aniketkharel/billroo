import { CoffeeOutlined, FoodBankOutlined, WineBarOutlined } from "@mui/icons-material";
import React from "react";

export const Icon = (icon: String) => {
  if (icon === "Food") {
    return <FoodBankOutlined color="action" />;
  } else if (icon === "Coffee") {
    return <CoffeeOutlined color="disabled" />;
  } else {
    return <WineBarOutlined color="warning" />;
  }
};
