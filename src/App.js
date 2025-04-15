
// Import necessary modules from React library
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="/LandingPage" element={<LandingPage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Sign_Up" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;