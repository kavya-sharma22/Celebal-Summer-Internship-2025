import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";

const App = () => {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f0f2f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/display" element={<DisplayData />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
