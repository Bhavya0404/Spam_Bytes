import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ReportChild from './components/ReportChild'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import VerificationPage from './components/VerificationPage'
import UserDashboard from './features/users/UserDashboard'
// import AllUser from './features/users/AllUser'
import AllNgo from './features/ngo/AllNgo'
import NgoDashboard from './features/ngo/NgoDashboard'
import AllFoundChild from './features/foundchild/AllFoundChild'
import ComplaintStatusPage from './features/foundchild/ComplaintStatusPage'
import NodalDashboard from './features/nodal/NodalDashboard'
import ChildDetails from './components/ChildDetails'
import ChangePassword from './components/ChangePassword'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword'
import NodalProfile from './components/NodalProfile'
import Logout from './components/Logout'

function App() {
  return (
    <div style={{ flexDirection: 'column', display: 'flex' }}>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reportchild" element={<ReportChild />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        {/* <Route path="/users" element={<AllUser />} /> */}
        <Route path="IN/" element={<UserDashboard />} />
        <Route path="/NGO/:ngoId" element={<NgoDashboard />} />
        <Route exact path="/ngo" element={<AllNgo />} />
        <Route path="/admin" element={<NodalDashboard />} />
        <Route path="/admin/profile" element={<NodalProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/foundchild" element={<AllFoundChild />} />
        <Route path="/complaintstatus" element={<ComplaintStatusPage />} />
        {/* <Route path="/admin/:adminId" element={<NodalDashboard />} /> */}
        <Route path="/child/:childId" element={<ChildDetails />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/passwordReset/:token/:id" element={<ResetPassword />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App
