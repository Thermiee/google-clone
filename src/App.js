import { useState } from "react";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  // Temporary store search value in React {useState} Hooks
  const [search, setSearch] = useState("");
  return (
    <section className="google">
      {/* Pass search value and setSearch function as props */}
      <Navbar />
      <Logo search={search} />
      <Input setSearch={setSearch} />
      <Footer />
    </section>
  );
}

export default App;
