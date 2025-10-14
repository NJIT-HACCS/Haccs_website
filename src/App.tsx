import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/home';
import AboutUs from './Screens/aboutus';
import ErrorPage from './Screens/errorpage';
import Gallery from './Screens/gallery';
import NavBar from './components/navigate';
import Achievements from './Screens/achievements';
import Events from './Screens/events';
import ContactUs from './Screens/contactus';
import "./App.css";

function App(): React.JSX.Element {
  return (
    <Router>
        <main>

          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='/achievements' element={<Achievements />} />
            <Route path='/events' element={<Events />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>

        </main>
    </Router>
  );
}
export default App;