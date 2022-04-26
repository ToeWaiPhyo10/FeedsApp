import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar";
import Routess from "./pages/route";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Routess />
      </Router>
    </div>
  );
}

export default App;
