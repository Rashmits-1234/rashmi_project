import React from "react";
//import { useNavigate } from "react-router-dom";

function Home() {
  //const navigate = useNavigate();

  // const handleGetStarted = () => {
  //   navigate("/vehicle");
  // };

  return (
    <div className="main-content">
      <h1>Welcome to Our Vehicle Service Booking App!</h1>
      <p>Book your next service hassle-free.</p>
      {/* <button onClick={handleGetStarted}>Get Started</button> */}
    </div>
  );
}

export default Home;
