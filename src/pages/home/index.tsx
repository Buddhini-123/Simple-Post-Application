import React from "react";
import Navbar from "../../components/NavBar/Navbar.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const Home = () => {

  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Home Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
