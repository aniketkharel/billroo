"use client";

import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Grid, List, Typography } from "@mui/material";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@mui/icons-material";
import { deepOrange, green } from "@mui/material/colors";
import { useUserContext } from "@/user";
import { Icon } from "./Icons";

interface Data {
  id: string;
  category_name: string;
  avg_expense_per_user_category: number;
  avg_expense_per_all_category: number;
}

export const Expense = () => {
  const { id } = useUserContext();
  const [data, setData] = useState<[Data] | undefined>();

  useEffect(() => {
    const getexpenses = async () => {
      const response = await fetch(process.env.SERVER_URI + `expenses/${id}`, { cache: "no-cache" });
      const data = await response.json();
      setData(data.data);
    };
    getexpenses();
  }, [id]);

  return (
    <Box maxWidth={540}>
      <List>
        {data && data!.length ? (
          data!.map((exp, index) => (
            <>
              <Card sx={{ mb: 3 }} raised key={index}>
                <CardContent>
                  <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                    <Grid item xs={8}>
                      <Typography variant="inherit" display="block" gutterBottom sx={{ display: "flex", gap: 2, alignContent: "center" }}>
                        <Box>{exp.category_name}</Box>
                        <Box fontSize={2}>{Icon(exp.category_name)}</Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">
                        {Math.round(exp.avg_expense_per_user_category)} $
                        <span style={{ fontSize: ".8em", color: "grey" }}>&nbsp;/&nbsp; Week</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        {Math.ceil(exp.avg_expense_per_user_category - exp.avg_expense_per_all_category) < 0 ? (
                          <>
                            <Typography color={green[800]} variant="caption" display={"flex"} alignItems={"center"} fontSize={"large"}>
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
          ))
        ) : (
          <Box>No Record</Box>
        )}
      </List>
    </Box>
  );
};
