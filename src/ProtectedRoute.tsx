import { ReactNode } from "react";
import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Vous devez être connecté pour accéder à cette page.</p>
        <button onClick={() => navigate("login")}>Retour à l'accueil</button>
      </div>
    );
  }

  return <>{children}</>;
}
