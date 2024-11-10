import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import LessonComp from "./LessonComp";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const lessons: LessonComp[] = [
        {
            src: "https://picsum.photos/300",
            alt: "Image 1",
            date: "November 9, 2024",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 1",
            date: "November 9, 2024",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            date: "November 9, 2024",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            date: "November 9, 2024",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            date: "November 9, 2024",
            title: "Hackathons Suck",
            completion: false,
        },
        {
            src: "https://picsum.photos/300",
            alt: "Image 2",
            date: "November 9, 2024",
            title: "Hackathons Suck",
            completion: false,
        },
    ];
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor="inherit"
                    indicatorColor="secondary"
                    className="tab-static"
                >
                    <Tab
                        label="My Lessons"
                        {...a11yProps(0)}
                        className="tab-class"
                        style={{ fontSize: "var(--h5)" }}
                    />
                    <Tab
                        label="Analytics"
                        {...a11yProps(1)}
                        style={{ fontSize: "var(--h5)" }}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <LessonComp lessons={lessons} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
        </Box>
    );
}
