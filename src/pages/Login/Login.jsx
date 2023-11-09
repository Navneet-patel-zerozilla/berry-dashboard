import React from "react";
import classes from "./login.module.css";
import LoginLogo from "/src/assets/login_logo.svg";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/Input/Input";

const Login = () => {
  const navigate = useNavigate();

  const signInHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={classes.login}>
      <div className={classes.login_box}>
        <div className={classes.logo_invitation}>
          <div className={classes.logo}>
            <img src={LoginLogo} alt="Login Logo" />
          </div>
          <div className={classes.invitation}>
            <h1 className={classes.login_heading_primary}>Hi, Welcome Back</h1>
            <h2 className={classes.login_heading_secondary}>
              Enter your credenials to continue
            </h2>
          </div>
        </div>
        <div className={classes.input_container}>
          <CustomInput type="email" label="Email address / Username" />
          <CustomInput type="password" label="Password" />
        </div>
        <div className={classes.input_functions}>
          <div className={classes.checkbox}>
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox">Keep me logged in</label>
          </div>
          <span>Forgot password?</span>
        </div>
        <div className={classes.login_actions}>
          <Button
            variant="contained"
            className={classes.signin}
            onClick={signInHandler}
          >
            Sign In
          </Button>
          <Divider style={{ width: "100%" }} />
          <span>Don't have an account?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
