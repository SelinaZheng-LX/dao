import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function Home() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [reEmail, setReEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isTeacher, setIsTeacher] = useState("");

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

    //Handle email
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        console.log(event.target.value)
    };

    //Handle ReEmail
    const handleReEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReEmail(event.target.value);
        console.log(event.target.value)
    };

    //Handle password
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        console.log(event.target.value)
    };

    //Handle Radio Button for teacher and student
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsTeacher(event.target.value)
        console.log(event.target.value)
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        // Data to send to the backend
        const userData = {
            email,
            password,
            isTeacher
        }
        console.log("Sending data to backend:", userData);  // Log the data to check


        axios.post('http://localhost:4000/api/users', userData) 
            .then(response => {
                console.log('User created:', response.data)
            })
            .catch(error => {
                console.log('Error creating user', error);
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
                        <h2 className="login-title">Create an Account</h2>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                Are you a student or a teacher?
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={isTeacher}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel
                                    value="teacher"
                                    control={<Radio />}
                                    label="Teacher"
                                    style={{ color: "#000" }}
                                />
                                <FormControlLabel
                                    value="student"
                                    control={<Radio />}
                                    label="Student"
                                    style={{ color: "#000" }}
                                />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="standard"
                            style={{ width: "85%" }}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Re-enter email address"
                            variant="standard"
                            style={{ width: "85%" }}
                            value={reEmail}
                            onChange={handleReEmailChange}
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
                            onClick={handleSubmit}
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
                        <Link to="/login" className="login-text">
                            Have an account? Log in
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}


