import { useState, useEffect } from "react";
import { Chart } from "chart.js";

const ScatterPlot = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("scatter_data.json");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error gracefully (e.g., display an error message)
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <p>Loading plot data...</p>;
    }

    return (
        <canvas
            ref={(canvas) => {
                if (canvas && data) {
                    new Chart(canvas, {
                        type: "scatter",
                        data: data,
                        options: {
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: "Student ID",
                                    },
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: "Average Percentage",
                                    },
                                },
                            },
                        },
                    });
                }
            }}
        />
    );
};

export default ScatterPlot;
