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
  );
}

export default App;
