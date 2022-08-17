import React from "react";
import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  box: {
    backgroundColor: "red",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" bgcolor={"red"}>
      <Box>
        <Link to="/">
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
