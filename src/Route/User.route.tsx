import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home/Home";
import Settings from "../Page/Settings/Settings";
import Body from "../Component/Body/Body";

export default function UserRoute() {
  const isAdmin = false;

  return (
    <Routes>
      <Route
        path="home"
        element={
          <Body>
            <Home>
              {isAdmin ? <div>Admin Profile</div> : <div>User Profile</div>}
            </Home>
          </Body>
        }
      />
      <Route
        path="settings"
        element={
          <Body>
            <Settings />
          </Body>
        }
      />
    </Routes>
  );
}
