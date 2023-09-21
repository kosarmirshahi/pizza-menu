import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Pizza from "./components/Pizza/Pizza";
import margaritaPizza from "./images/margarita.svg";
import peperoniPizza from "./images/peperoni.svg";
import chickenPizza from "./images/chicken.svg";
import vegeterianPizza from "./images/vegeterian.svg";

const pizzas = [
  {
    name: "Margarita",
    content: "Cheese, hungarian pepper, capsicum and onion",
    src: margaritaPizza,
    price: "10.99$",
  },
  {
    name: "Classic Pepporoni",
    content: "Cheese, hungarian pepper, paneer, capsicum and onion",
    src: peperoniPizza,
    price: "12.99$",
  },
  {
    name: "Chicken Supreme",
    content: "Cheese, hungarian pepper, capsicum and onion",
    src: chickenPizza,
    price: "11.99$",
  },
  {
    name: "Vegeterian",
    content: "Cheese , onion, and tomato , hungarian pepper",
    src: vegeterianPizza,
    price: "13.99$",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Location />
      {pizzas.map((pizza) => (
        <Pizza
          name={pizza.name}
          content={pizza.content}
          src={pizza.src}
          price={pizza.price}
        />
      ))}
    </div>
  );
}

export default App;
