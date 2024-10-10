import "./App.css";
import Container from "./Component/container";
import Login from "./Component/login";
import Body from "./Page/Body";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeProvider } from "./DarkThemeContext";

function App() {
  return (
    <DarkThemeProvider>
      <Body>
        <BrowserRouter />
        <Container>
          <Login />
        </Container>
      </Body>
    </DarkThemeProvider>
  );
}

export default App;
