import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home/Home";
import Settings from "../Page/Settings/Settings";

export default function UserRoute() {
  const isAdmin = false;

  return (
    <Routes>
      <Route
        path="home"
        element={
          <Home>
            {isAdmin ? <div>Admin Profile</div> : <div>User Profile</div>}
          </Home>
        }
      />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}
