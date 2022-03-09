import React from "react";
import { AppBar } from "@mui/material";
import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; Meraki@2022
                &emsp;&emsp;
                All Rights Reserved

              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}