import './App.css';
import Login from './components/Login';
import MapView from './components/MapView';
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
      <h2>Map View</h2>
      <MapView childLocation={[77.3830179, 28.5712296]} officeLocation={[77.3395, 28.5898]} />
    </div>
  );
}

export default App;
