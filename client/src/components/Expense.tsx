"use client";

import React, { ReactElement } from "react";
import { Box, Card, CardContent, Grid, List, Typography } from "@mui/material";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

interface Data {
  id: string;
  category_name: string;
  avg_expense_per_user_category: number;
  avg_expense_per_all_category: number;
}

export const Expense = (props: { data: [Data] }) => {
  const calculator = (avg_exp_per_my_cate: number, avg_exp_per_all_cate: number): { text: string; icon: ReactElement; bg: string } => {
    const percent = Math.ceil(avg_exp_per_my_cate - avg_exp_per_all_cate);
    if (percent < 0) {
      return { text: "below", bg: "green", icon: <ArrowDownwardOutlined /> };
    } else {
      return { text: "above", bg: "red", icon: <ArrowUpwardOutlined /> };
    }
  };

  return (
    <Box maxWidth={540}>
      <List>
        {props.data.map((exp) => (
          <>
            <Card sx={{ mb: 3 }} raised>
              <CardContent>
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                  <Grid item xs={8}>
                    <Typography variant="inherit" display="block" gutterBottom>
                      {exp.category_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6">{exp.avg_expense_per_user_category}$ / Week</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      {Math.ceil(exp.avg_expense_per_user_category - exp.avg_expense_per_all_category) < 0 ? (
                        <>
                          <Typography color={"teal"} variant="caption" display={"flex"} alignItems={"center"} fontSize={"large"}>
                            {" "}
                            <ArrowDownwardOutlined />{" "}
                            {Math.round(Math.abs(exp.avg_expense_per_user_category - exp.avg_expense_per_all_category))} % below average
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography color={deepOrange[800]} variant="caption" display={"flex"} alignItems={"center"} fontSize={"large"}>
                            <ArrowUpwardOutlined />{" "}
                            {Math.round(Math.abs(exp.avg_expense_per_user_category - exp.avg_expense_per_all_category))} % above average
                          </Typography>
                        </>
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </>
        ))}
      </List>
    </Box>
  );
};
