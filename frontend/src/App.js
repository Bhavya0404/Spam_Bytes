import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ReportChild from './components/ReportChild';

function App() {
  return (
    <div>
      <h2>Register</h2>
      <Register />
      <h2>Login</h2>
      <Login />
      <h2>Report Child</h2>
      <ReportChild />
    </div>
  );
}

export default App;
