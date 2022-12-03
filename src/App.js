import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
function App() {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/profile" element={<PrivateRoute/>}>
       <Route path="/profile" element={<Profile/>}/>
       </Route>
       <Route path="/sign-in" element={<SignIn/>}/>
       <Route path="/sign-up" element={<SignUp/>}/>
       <Route path="/forgot-password" element={<ForgotPassword/>}/>
       <Route path="/offers" element={<Offers/>}/>
       <Route path="/create-listing" element={<PrivateRoute/>}>
       <Route path="/create-listing" element={<CreateListing/>}/>
       </Route>
      </Routes>
     </Router>
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

<ToastContainer />
    </>
  );
}

export default App;
