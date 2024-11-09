import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.tsx";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
