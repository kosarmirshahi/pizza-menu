import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Pizza from "./components/Pizza/Pizza";

const pizzas = [
  {
    name: "Margarita",
    content: "Cheese , onion, and tomato pure",
    src: "margherita.jpg",
    price: "10.99$",
  },
  {
    name: "Classic Pepporoni",
    content: "Cheese, hungarian pepper, paneer, capsicum and onion",
    src: "pepperoni.jpg",
    price: "12.99$",
  },
  {
    name: "Chicken Supreme",
    content: "Cheese , onion, and tomato pure",
    src: "vegetarian.jpg",
    price: "11.99$",
  },
  {
    name: "Vegeterian",
    content: "Cheese , onion, and tomato pure",
    src: "hawaiian.jpg",
    price: "13.99$",
  },
];

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
