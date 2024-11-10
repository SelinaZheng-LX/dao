import Tab from "../components/TabStudent.tsx";
import NavBar from "../components/Navbar.tsx";
//import AddBoxIcon from "@mui/icons-material/AddBox";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function StudentLesson() {
    return (
        <>
            <section id="teacherInterface">
                <NavBar />
                <Tab />
            </section>
        </>
    );
}
