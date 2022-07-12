import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ReportChild from './components/ReportChild'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import VerificationPage from './components/VerificationPage'
import UserDashBord from './features/users/UserDashBord'
import AllUser from './features/users/AllUser'
import AllNgo from './features/ngo/AllNgo'
import NgoDashboard from './features/ngo/NgoDashboard'
import AllNodal from './features/nodal/AllNodal'
import AllFoundChild from './features/foundchild/AllFoundChild'
import NodalDashboard from './features/nodal/NodalDashboard'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reportchild" element={<ReportChild />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        <Route path="/users" element={<AllUser />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        <Route path="IN/:userId" element={<UserDashBord />} />
        <Route path="/NGO/:ngoId" element={<NgoDashboard />} />
        <Route exact path="/ngo" element={<AllNgo />} />
        <Route path="/ADMIN" element={<AllNodal />} />
        <Route path="/foundchild" element={<AllFoundChild />} />
        <Route path="/ADMIN/:adminId" element={<NodalDashboard />} />
      </Routes>
    </div>
  )
}

export default App
