import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Pizza from "./components/Pizza/Pizza";
function App() {
  return (
    <div className="container">
      <Header />
      <Location />
      <Pizza />
    </div>
  );
}

export default App;
