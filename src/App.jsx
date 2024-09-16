import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about_us/About";
import Contact from "./components/contact_us/Contact";
import Home from "./components/home_page/Home";
import Service from "./components/service_page/Service";
import { ApplicationProvider } from "./contexts/applicationContext";
import "../index.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import VisaApplication from "./components/visa_application/VisaApplication";
import ServicesList from "./components/service_page/ServicesList";
import ApplicationSignup from "./components/visa_application/ApplicationSignup";
import SetPassword from "./components/visa_application/SetPassword";
import SetPhone from "./components/visa_application/SetPhone";
import UploadPhoto from "./components/visa_application/UploadPhoto";
import UploadPassport from "./components/visa_application/UploadPassport";
import Detail from "./components/visa_application/Detail";
import Checkout from "./components/visa_application/Checkout";
import { useState } from "react";

function App() {
  // Define the state for the ApplicationProvider
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [photo_img, setPhotoImg] = useState(null);
  const [passport_img, setPassportImg] = useState(null);
  const [passport_data, setPassportData] = useState({});

  return (
    <ApplicationProvider
      value={{
        username,
        password,
        phone_no,
        photo_img,
        passport_img,
        passport_data,
        setUsername,
        setPassword,
        setPhoneNo,
        setPhotoImg,
        setPassportImg,
        setPassportData,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          {/* <Route path="career" element={<div>Career Page</div>} /> Add a valid element */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="service_list" element={<ServicesList />} />
          <Route path="application" element={<VisaApplication />} />
          <Route path="application/signup" element={<ApplicationSignup />} />
          <Route path="application/password" element={<SetPassword />} />
          <Route path="application/phone" element={<SetPhone />} />
          <Route path="application/upload_photo" element={<UploadPhoto />} />
          <Route path="application/upload_passport" element={<UploadPassport />} />
          <Route path="application/detail" element={<Detail />} />
          <Route path="application/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ApplicationProvider>
  );
}

export default App;
