import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Downloads from "./pages/Downloads";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import background from "./assets/background.jpg";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App" style={{ backgroundImage: `url(${background})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center", width: "100vw", height: "100vh" }}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/downloads" element={<Downloads />} />
                        <Route path="/work" element={<Work />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
