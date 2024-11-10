import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// MUI Imports
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //Data to send to the backend
        const userData = {
            email,
            password,
        };
        console.log("Sending data to backend:", userData);

        axios
            .post("http://localhost:4000/api/users/login", userData)
            .then((response) => {
                console.log("User logged in:", response.data);
            })
            .catch((error) => {
                console.log("Error authenticating user", error);
            });
    };

    return (
        <>
            <section className="body">
                <div className="flex-center">
                    <div className="title-col flex-col-center">
                        <h1 className="title-text">
                            Dao<span className="period">.</span>
                        </h1>
                        <p className="slogan">Personalize learning</p>
                    </div>
                    <div className="login flex-col-center">
                        <h2 className="login-title">Sign in</h2>
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            value={email}
                            onChange={handleEmailChange}
                            variant="standard"
                            style={{ width: "85%" }}
                        />
                        <FormControl
                            sx={{ m: 1, width: "85%" }}
                            variant="standard"
                        >
                            <InputLabel htmlFor="standard-adornment-password">
                                Password
                            </InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword
                                                    ? "hide the password"
                                                    : "display the password"
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            onMouseUp={handleMouseUpPassword}
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button
                            className="button"
                            onClick={handleSubmit}
                            variant="contained"
                            size="large"
                            style={{
                                width: "85%",
                                fontSize: "var(--h5)",
                                fontFamily: "Alata",
                            }}
                        >
                            <Link to="/teacher" className="font-white">
                                Log in
                            </Link>
                        </Button>
                        <Link to="/home" className="login-text">
                            Have an account? Log in
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
