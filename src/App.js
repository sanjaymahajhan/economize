import "./App.css";
import SideBar from "./components/SideBar/index";
import Dashboard from "./components/DashBoard/index";

function App() {
  return (
    <div className="main-container">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
