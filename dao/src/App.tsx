import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";
import TeacherLesson from "./routes/teacherLesson.tsx";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/teacher" element={<TeacherLesson />} />
            </Routes>
        </>
    );
}

export default App;
