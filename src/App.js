import { useState } from "react";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <section className="google">
      <Navbar />
      <Logo search={search} />
      <Input setSearch={setSearch} />
      <Footer />
    </section>
  );
}

export default App;
