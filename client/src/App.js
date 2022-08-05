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
import Messages from './Components/Dashboard/Messages';
import Notifications from './Components/Dashboard/Notifications';
import Profile from './Components/Dashboard/Profile';
import Wallet from './Components/Dashboard/Wallet';
import EachBuilding from './Components/RealEstate/EachBuilding';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path="/real-estate" element={<RealEstateListing />} />
        <Route path="/real-estate/:title" element={<EachBuilding />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/others" element={<OtherSections />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/" element={<Profile />} />
        <Route path="/dashboard/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
}

export default App;
