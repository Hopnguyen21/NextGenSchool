import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import { UserProvider } from "./Context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <AppRouter />
      </Router>
    </UserProvider>
  );
}
