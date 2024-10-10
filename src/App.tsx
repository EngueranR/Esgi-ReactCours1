import "./App.css";
import FormLogin from "./Page/FormLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkThemeProvider } from "./DarkThemeContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Component/login";
import UserRoute from "./Route/User.route";

function App() {
  return (
    <DarkThemeProvider>
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
    </DarkThemeProvider>
  );
}
export default App;
