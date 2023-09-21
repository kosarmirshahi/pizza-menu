import React from "react";
import ReactDOM from "react-dom/client";
import "./Pizza.css";
import peperoni from "../../images/peperoni.svg";
function Pizza() {
  return (
    <div className="pizza">
      <div>
        <img src={peperoni} alt="pizza" className="pizzaImg" />
      </div>
      <div className="text">
        <h4 className="pizzaName">Classic Pepporoni</h4>
        <p className="Contents">
          Cheese, hungarian pepper, paneer, capsicum and onion
        </p>
        <p className="price">12$</p>
      </div>
      <div>
        <button className="addBtn">+ ADD</button>
      </div>
    </div>
  );
}

export default Pizza;
