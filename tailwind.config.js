/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "#000",
                "secondary-color": "#02F3E9",
                "third-color": "#2F84FF",
                "white-color": "#fff",
            },
            fontSize: {
                h1: "5.653rem",
                h2: "3.998rem",
                h3: "2.827rem",
                h4: "1.999rem",
                h5: "1.6rem",
                h6: "1.414rem",
                h7: "1.2rem",
                h8: "1rem",
                smallText: "0.8rem",
            },
            fontWeight: {
                light: "300",
                regular: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
            },
            fontFamily: {
                alata: ["Alata"],
            },
        },
    },
    plugins: [],
};
