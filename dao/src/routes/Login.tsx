import React, { useState } from "react";
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
                        <h2 className="login-title">Create an Account</h2>
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="standard"
                            style={{ width: "85%" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Re-enter email address"
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
                            variant="contained"
                            size="large"
                            style={{
                                width: "85%",
                                fontSize: "var(--h5)",
                                fontFamily: "Alata",
                            }}
                        >
                            Sign Up
                        </Button>
                        <p className="login-text">
                            Don't have an account? Sign up
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
