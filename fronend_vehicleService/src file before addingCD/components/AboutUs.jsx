import React from "react";

function AboutUs() {
  return (
    <div className="aboutus-background">
      <div className="about-us" style={{ marginTop: "100px" }}>
        <h1>About Us</h1>
        <div className="about-us-container">
          <div className="about-us-text">
            <p>
              Welcome to our Vehicle Service Booking Portal! We understand the
              importance of maintaining your vehicle's performance and safety,
              which is why we've created a seamless platform for hassle-free
              service booking. Whether it's routine maintenance, repairs, or
              upgrades, our portal connects you with trusted service providers,
              ensuring quality care for your vehicle. With user-friendly
              features and a comprehensive network of service centers, our
              platform simplifies the booking process, allowing you to schedule
              appointments conveniently from the comfort of your home. Say
              goodbye to long waiting times and uncertainty – our portal
              streamlines the entire service experience, providing transparency
              and peace of mind at every step. Join us in revolutionizing the
              way you care for your vehicle. Experience efficiency, reliability,
              and excellence with our Vehicle Service Booking Portal today!
            </p>
          </div>
          <div className="about-us-image">
            <img
              src="https://th.bing.com/th/id/OIP.GaoHDSRd4FTZWa0LcF5_aAHaFW?rs=1&pid=ImgDetMain"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
