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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/reportchild" element={<ReportChild />} />
        <Route path="/verificationpage" element={<VerificationPage />} />
        <Route path="/users" element={<AllUser />} />
        <Route path="user/:userId" element={<UserDashBord />} />
=======
        <Route path="/reportchild" element={<ReportChild/>}/>
        <Route path="/users" element={<AllUser/>} />
        <Route path='user/:userId' element={<UserDashBord/>}/>
>>>>>>> 0b9fc0ffe313cb6eaacdd7e671449b8d14e69328
      </Routes>
    </div>
  );
}

export default App;
