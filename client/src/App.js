import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from './Components/Home/HomePage';
import RealEstateListing from "./Components/Categories/RealEstate/RealEstateListing";
import Cars from "./Components/Categories/Cars/CarsListing";
import OtherSections from "./Components/OtherSections/OtherSections";
import Messages from './Components/Dashboard/Messages';
import Notifications from './Components/Dashboard/Notifications';
import Profile from './Components/Dashboard/Profile/Profile';
import Wallet from './Components/Dashboard/Wallet';
import EachCars from './Components/Categories/Cars/EachCars';
import About from './Components/About/About';
import Help from './Components/About/Help';
import Earning from './Components/About/Earning';
import Benefits from './Components/About/Benefits';
import Dashboard from './Components/Dashboard/Dashboard';
import Savedpost from './Components/Dashboard/Savedpost';
import ProfileContainer from './container/ProfileContainer.jsx';
import Verification from './Components/Verification/Verification';
import ProfileList from './container/ProfileList';
import CreateListing from './container/CreateListing';
import EditProfile from './Components/Dashboard/Profile/EditProfile';
import UpgradeProfile from './Components/Dashboard/Profile/UpgradeProfile';
import ProfileStat from './container/ProfileStat';
import Waitlist from './Components/Page/Waitlist';
import SignUpPage from './Components/Page/SignupPage';
import LoginPage from './Components/Page/LoginPage';
import EmailPage from './Components/Page/EmailPage';
import { QueryClientProvider, QueryClient } from 'react-query';
import Transfer from './Components/Dashboard/Transfer'
import Transfer2 from './Components/Dashboard/Transfer2'
import SuccessPage from './Components/Page/SuccessPage';
import Withdrawal from './Components/Dashboard/Withdrawal';
import Deposit from './Components/Dashboard/Deposit';
import LoggedUser from './Components/Profile/LoggedUser';
import OtherUser from './Components/Profile/OtherUser';
import ChatBox from './Components/Dashboard/ChatBox';
import Admin from './Components/Admin/Admin';
import Loader from './Components/Loader/Loader'
import Contact from './Contact/Contact';
import ModalCont from './Components/Modal/ModalCont';
import Register from './Components/RegisterPage/Register';
import useContextAPI from './Components/ContextAPI/ContextAPI';
import EachRealEstate from './Components/Categories/RealEstate/EachRealEstate';
import { AnimatePresence } from 'framer-motion';
import MediaView from './Components/Categories/MediaView/MediavView';
import ForgottenPasswordPage from './Components/Page/ForgottenPasswordPage';
import Terms from './Components/TermsPage/Terms';
import Privacy from './Components/PrivacyPage/Privacy';
import LuxuryServiceListing from './Components/Categories/LuxuryService/LuxuryServiceListing';
import ResetPage from './Components/Page/ResetPage';
import ExclusiveEventPage from './Components/Page/ExclusiveEventPage';
import WeekendEscapePage from './Components/Page/WeekendEscapePage';
import HelicopterRidePage from './Components/Page/HelicopterRidePage';
import ConceirgeVacationPage from './Components/Page/ConceirgeVacationPage';
import BoatCruisePage from './Components/Page/BoatCruisePage';
import ChaffeurPage from './Components/Page/ChauffeurPage';
import Pricing from './Components/Categories/LuxuryService/Pricing';

function App() {
  const queryClient = new QueryClient();
  const mainData = useContextAPI()
  const token = localStorage.getItem("token")

  return (
    <QueryClientProvider client={queryClient} >
      <ToastContainer />
      <Router>
        <AnimatePresence exitBeforeEnter>
          {/* <Navbar/> */}
          <Routes>
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/modal' element={<ModalCont />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/loader' element={<Loader />} />
            <Route path='/email' element={<EmailPage mainData={mainData} />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<ForgottenPasswordPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path={`/reset/${token}`} element={<ResetPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/savedpost' element={<Savedpost />} />
            <Route path="/real-estate" element={<RealEstateListing />} />
            <Route path="/luxury-service" element={<LuxuryServiceListing />} />
            <Route path="/dashboard/messages/chat/:id" element={<ChatBox />} />
            <Route path="/real-estate/:id" element={<EachRealEstate active={0} />} />
            <Route path="/real-estate/:id/media" element={<MediaView active={0} />} />
            <Route path="/cars" element={<Cars mainData={mainData} />} />
            <Route path="/cars/:id" element={<EachCars active={0} />} />
            <Route path="/cars/:id/media" element={<MediaView active={0} />} />
            <Route path="/others" element={<OtherSections />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/messages" element={<Messages />} />
            <Route path="/dashboard/notifications" element={<Notifications />} />
            <Route path="/dashboard/profile/verification" element={<Profile mainData={mainData} />} />
            <Route path="/dashboard/" element={<Profile mainData={mainData} />} />
            <Route path="/dashboard/wallet" element={<Wallet />} />
            <Route path="/dashboard/wallet/transfer" element={<Transfer />} />
            <Route path="/dashboard/wallet/withdraw" element={<Withdrawal />} />
            <Route path="/dashboard/wallet/deposit" element={<Deposit />} />
            <Route path='/dashboard/wallet/transfer/confirm' element={<Transfer2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path='/success' element={<SuccessPage />} />
            <Route path="/help/earning" element={<Earning />} />
            {/* <Route path="/help/benefits" element={<Benefits />} />
          <Route path="/profile" element={<ProfileContainer />} /> */}
            <Route path="/profile/verification" element={<Verification />} />
            <Route path="/profile/list" element={<ProfileList />} />
            <Route path="/profile/stat" element={<ProfileStat />} />
            <Route path='/profile/edit' element={<EditProfile mainData={mainData} />} />
            <Route path='/profile/upgrade' element={<UpgradeProfile mainData={mainData} />} />
            <Route path="/profile/create-listings" element={<CreateListing />} />
            <Route path="/profile" element={<LoggedUser mainData={mainData} />} />
            <Route path="/profile/:id" element={<OtherUser />} />
            <Route path="/waitList" element={<Waitlist />} />
            <Route path="/luxury-service/exclusive-event" element={<ExclusiveEventPage />} />
            <Route path="/luxury-service/weekend-escape" element={<WeekendEscapePage />} />
            <Route path="/luxury-service/helicopter-ride" element={<HelicopterRidePage />} />
            <Route path="/luxury-service/concierge-vacation" element={<ConceirgeVacationPage />} />
            <Route path="/luxury-service/boat-cruise" element={<BoatCruisePage />} />
            <Route path="/luxury-service/chauffeur" element={<ChaffeurPage />} />
            <Route path="luxury-service/pricing" element={<Pricing />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </QueryClientProvider>
  );
}

export default App;