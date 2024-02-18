import React from "react";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import NewTeacher from "./components/NewTeacher";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/newteacher" element={<NewTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
