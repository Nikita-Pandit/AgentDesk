import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Dashboard from  "./pages/Dashboard"
import UploadCSV from './pages/UploadCSV'
// import { isAuthenticated } from './utils/auth'
import Agents from "./pages/Agents"
import AssignedRecords from './pages/AssignedRecords';
function App() {
  return (
 <Router>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={<Dashboard />}
        // element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/upload"
        // element={isAuthenticated() ? <UploadCSV /> : <Navigate to="/" />}
        element={<UploadCSV/>}
      />
      <Route path="/agents" element={<Agents />} />
       <Route path="/records" element={<AssignedRecords />} />
    </Routes>
 </Router>
  )
}

export default App
