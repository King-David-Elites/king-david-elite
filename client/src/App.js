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

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path="/real-estate" element={<RealEstateListing />} />
        <Route path="/real-estate/:title" element={<EachBuilding active={0} />} />
        <Route path="/real-estate/:title/:Id" element={<EachBuildingPhotos active={0} />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:title" element={<EachCars active={0} />} />
        <Route path="/cars/:title/:Id" element={<EachCarPhotos active={0}/>} />
        <Route path="/others" element={<OtherSections />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/" element={<Profile />} />
        <Route path="/dashboard/wallet" element={<Wallet />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
