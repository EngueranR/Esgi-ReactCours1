import React from "react";
import { useNavigate } from "react-router-dom";

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Paramètres</h1>
      <button onClick={() => navigate("/user/home")}>Retour à l'accueil</button>
    </div>
  );
};

export default Settings;
