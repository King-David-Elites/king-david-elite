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
import Messages from './Components/Dashboard/Messages';
import Notifications from './Components/Dashboard/Notifications';
import Profile from './Components/Dashboard/Profile';
import Wallet from './Components/Dashboard/Wallet';
import EachBuilding from './Components/RealEstate/EachBuilding';
import EachBuildingPhotos from './Components/RealEstate/EachBuildingPhotos';
import EachCars from './Components/Cars/EachCars';
import EachCarPhotos from './Components/Cars/EachCarPhotos'
import About from './Components/About/About';
import Help from './Components/About/Help';
import Earning from './Components/About/Earning';
import Benefits from './Components/About/Benefits';
import AddCar from './Components/Cars/AddCar';
import SignupPage from './Components/Page/SignupPage';
import LoginPage from './Components/Page/LoginPage';
import AddRealEstate from './Components/RealEstate/AddRealEstate';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path="/real-estate" element={<RealEstateListing />} />
        <Route path="/real-estate/add" element={<AddRealEstate />} />
        <Route path="/real-estate/:title" element={<EachBuilding active={0} />} />
        <Route path="/real-estate/:title/:Id" element={<EachBuildingPhotos active={0} />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/add" element={<AddCar />} />
        <Route path="/cars/:title" element={<EachCars active={0} />} />
        <Route path="/cars/:title/:Id" element={<EachCarPhotos active={0}/>} />
        <Route path="/others" element={<OtherSections />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/" element={<Profile />} />
        <Route path="/dashboard/wallet" element={<Wallet />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />}/>
        <Route path="/help/earning" element={<Earning />}/>
        <Route path="/help/benefits" element={<Benefits />}/>
      </Routes>
    </Router>
  );
}

export default App;
