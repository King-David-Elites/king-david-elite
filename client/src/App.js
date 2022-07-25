import './App.css';
import 
{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import HomePage from './Components/Home/HomePage';
import RealEstateListing from "./Components/RealEstate/RealEstateListing";
import Cars from "./Components/Cars/CarsListing"
import OtherSections from "./Components/OtherSections/OtherSections"
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path="/real-estate" element={<RealEstateListing />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/others" element={<OtherSections />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
