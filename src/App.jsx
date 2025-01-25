<<<<<<< HEAD
import { useState } from 'react';
import Dashboard from './Dashboard';
import './App.css';
import Menu from './Menubar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div >
      
        <Dashboard/>
      </div>
      <div>      <Menu/>
</div>

</div> 
     
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/super-admin" element={<SuperAdminDashboard />} />
      </Routes>
    </Router>
>>>>>>> 2b1668b799d019c6c9219007b6b7fba38b4dc5bb
  );
}

export default App;
