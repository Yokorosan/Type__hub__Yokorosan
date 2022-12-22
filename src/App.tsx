import { RoutesMain } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "./components/toastify";

function App() {
  return (
    <>
      <StyledContainer />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
