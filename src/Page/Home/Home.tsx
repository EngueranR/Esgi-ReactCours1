import React from "react";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/user/settings")}>
        Aller aux paramètres
      </button>
      {children}
    </div>
  );
};
export default Home;
