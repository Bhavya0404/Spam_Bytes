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
import AllNgo from './features/ngo/AllNgo'
import NgoDashboard from './features/ngo/NgoDashboard'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reportchild" element={<ReportChild/>}/>
        <Route path="/users" element={<AllUser/>} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        <Route path='user/:userId' element={<UserDashBord/>}/>
        <Route path='/ngo/:ngoId' element={<NgoDashboard />} />
        <Route exact path='/ngo' element={<AllNgo />} />
      </Routes>
    </div>
  );
}

export default App;
