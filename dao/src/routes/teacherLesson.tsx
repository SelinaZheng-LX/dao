import LessonComp from "../components/LessonComp.tsx";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function teacherLesson() {
    const lessons: LessonComp[] = [
        {
            src: "https://picsum.photos/300",
            alt: "Image 1",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            title: "Hackathons Suck",
            completion: false,
        },
    ];
    return (
        <>
            <section id="teacherInterface" className="flex-wrap centered">
                <LessonComp lessons={lessons} />
            </section>
        </>
    );
}
