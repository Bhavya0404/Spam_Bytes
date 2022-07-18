import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import ReportChild from "./components/ReportChild";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import VerificationPage from "./components/VerificationPage";
import UserDashBord from "./features/users/UserDashBord";
import AllUser from "./features/users/AllUser";
import AllNgo from "./features/ngo/AllNgo";
import NgoDashboard from "./features/ngo/NgoDashboard";
import AllNodal from "./features/nodal/AllNodal";
import AllFoundChild from "./features/foundchild/AllFoundChild";
import ComplaintStatus from "./features/foundchild/ComplaintStatus";
import NodalDashboard from "./features/nodal/NodalDashboard";
import ChildDetails from "./components/ChildDetails";
import ChangePassword from "./components/ChangePassword";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reportchild" element={<ReportChild />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        <Route path="/users" element={<AllUser />} />
        <Route path="IN/:userId" element={<UserDashBord />} />
        <Route path="/ngo/:ngoId" element={<NgoDashboard />} />
        <Route exact path="/ngo" element={<AllNgo />} />
        <Route path="/admin" element={<AllNodal />} />
        <Route path="/foundchild" element={<AllFoundChild />} />
        <Route path="/complaintstatus" element={<ComplaintStatus />} />
        <Route path="/admin/:adminId" element={<NodalDashboard />} />
        <Route path="/child/:childId" element={<ChildDetails />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/passwordReset/:token/:id" element={<ResetPassword />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
