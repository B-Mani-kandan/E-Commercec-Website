import "./App.css";
import NavBar from "./customer/Components/Navigation/NavBar";
import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <NavBar />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
