import React from "react";
import { useNavigate } from "react-router-dom";
interface HomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1>Bienvenue sur la page d'accueil</h1>
      {children}

      <button onClick={() => navigate("/user/settings")}>
        Aller aux paramètres
      </button>
    </div>
  );
};
export default Home;
