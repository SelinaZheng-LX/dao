import LessonComp from "../components/LessonComp.tsx";
//import AddBoxIcon from "@mui/icons-material/AddBox";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function teacherLesson() {
    const lessons: LessonComp[] = [
        {
            src: "https://picsum.photos/300",
            alt: "Image 1",
            subject: "Math",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            subject: "Math",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            subject: "Math",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            subject: "Math",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            subject: "Math",
            title: "Hackathons Suck",
            completion: false,
        },
    ];
    return (
        <>
            <section id="teacherInterface">
                <LessonComp lessons={lessons} />
            </section>
        </>
    );
}
