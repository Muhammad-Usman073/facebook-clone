import React from "react";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
function App() {
  return (
    <div>
      <div className="bg-[#F0F2F5]  max-sm:bg-transparent">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
