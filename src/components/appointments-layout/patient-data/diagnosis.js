import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PauseIcon from "@material-ui/icons/Pause";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  breath: {
    marginTop: "1em",
    textAlign: "left",
  },
  gray: {
    color: "#616161",
    fontWeight: "400",
    fontSize: "1rem",
  },
  ourFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1em",
  },
}));

function Diagnosis() {
  const classes = useStyles();

  const [value, setValue] = React.useState();
  const [isRecord, setIsRecord] = React.useState(false);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(document.querySelectorAll(" p * div "));
  return (
    <Container>
      <form
      //   noValidate
      >
        <Grid spacing={3} container>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.ourFlex}>
              <Typography
                className={classes.gray}
                align={"left"}
                variant="h6"
                gutterBottom
              >
                Diagnosis{" "}
              </Typography>

              {isRecord ? (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => setIsRecord(!isRecord)}
                  endIcon={<PauseIcon />}
                >
                  Pause
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setIsRecord(!isRecord)}
                  className={classes.button}
                  endIcon={<MicIcon />}
                >
                  Record
                </Button>
              )}
            </div>

            <TextField
              id="outlined-multiline-flexible"
              placeholder="Diagnosis"
              multiline
              fullWidth
              rowsMax={4}
              value={value}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <br></br>
        {/* <Typography
          className={classes.gray}
          align={"left"}
          variant="h6"
          gutterBottom
        >
          Comments
        </Typography> */}
        <TextField
          id="standard-textarea"
          placeholder="Comments"
          multiline
          fullWidth
        />
      </form>{" "}
      <br></br>
      <br></br>
    </Container>
  );
}

export default Diagnosis;
