import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ReportChild from './components/ReportChild'
import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import VerificationPage from './components/VerificationPage'
import UserDashboard from './features/users/UserDashboard'
// import AllUser from "./features/users/AllUser";
import AllNgo from './features/ngo/AllNgo'
import NgoDashboard from './features/ngo/NgoDashboard'
import Districts from './components/Districts'
import Guidelines from './components/Guildelines'
import AllFoundChild from './features/foundchild/AllFoundChild'
import ComplaintStatusPage from './features/foundchild/ComplaintStatusPage'
import NodalDashboard from './features/nodal/NodalDashboard'
import ChildDetails from './components/ChildDetails'
import ChangePassword from './components/ChangePassword'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword'
import NodalProfile from './components/NodalProfile'
import PolicyPage from './components/PolicyPage'
import NCLP from './components/NCLP'
import Acts from './components/Acts'
import Logout from './components/Logout'
import { Toaster } from 'react-hot-toast'
import { Box, Container } from '@mui/material'

function App() {
  
  return (
    <Box
      sx={{
        width: '100%',

        // display: 'flex',
        // flexDirection: 'column',
      }}
    >
      <Navbar />
      {/* <Toaster /> */}
      {/* <Districts /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reportchild" element={<ReportChild />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        {/* <Route path="/users" element={<AllUser />} /> */}

        <Route path="IN/" element={<UserDashboard />} />
        {/* <Route path="/NGO/:ngoId" element={<NgoDashboard />} /> */}
        <Route path="/ngo" element={<NgoDashboard />} />
        <Route path="/Districts" element={<Districts />} />
        <Route path="/Policy" element={<PolicyPage />} />
        <Route path="/NCLP" element={<NCLP />} />
        <Route path="/Guildlines" element={<Guidelines />} />
        <Route path="/Acts" element={<Acts />} />

        <Route path="/admin" element={<NodalDashboard />} />
        <Route path="/admin/profile" element={<NodalProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/foundchild" element={<AllFoundChild />} />
        <Route path="/complaintstatus" element={<ComplaintStatusPage />} />
        <Route path="/child/:childId" element={<ChildDetails />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/passwordReset/:token/:id" element={<ResetPassword />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Box>
  )
}

export default App
