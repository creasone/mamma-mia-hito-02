import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  // Esta vista local permite navegar sin agregar librerías ni lógica de hitos futuros.
  const [view, setView] = useState("home");

  const renderView = () => {
    if (view === "login") return <Login />;
    if (view === "register") return <Register />;
    return <Home />;
  };

  return (
    <div className="app">
      <Navbar currentView={view} onNavigate={setView} />
      <main>{renderView()}</main>
      <Footer />
    </div>
  );
}

export default App;
