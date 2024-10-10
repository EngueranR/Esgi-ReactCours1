import "./App.css";
import FormLogin from "./Page/FormLogin/FormLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkThemeProvider } from "./Context/DarkThemeContext";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Component/Login/Login";
import UserRoute from "./Route/User.route";

function App() {
  return (
    <DarkThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <FormLogin>
                  <Login />
                </FormLogin>
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
