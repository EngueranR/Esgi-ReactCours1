import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UserRoute from "./Route/User.route";
import { DarkThemeProvider } from "./Context/DarkThemeContext";
import { AuthProvider } from "./Context/AuthContext";
import LoginForm from "./Page/LoginForm/LoginForm";
import Login from "./Component/Login/Login";

function App() {
  return (
    <DarkThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <LoginForm>
                  <Login />
                </LoginForm>
              }
            />
            <Route
              path="/user/*"
              element={
                <ProtectedRoute>
                  <UserRoute />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </DarkThemeProvider>
  );
}

export default App;
