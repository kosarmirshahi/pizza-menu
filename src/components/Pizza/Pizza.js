import React from "react";
import "./Pizza.css";
function Pizza(props) {
  return (
    <div className="pizza">
      <div>
        <img src={props.src} alt="pizza" className="pizzaImg" />
      </div>
      <div className="text">
        <h4 className="pizzaName">{props.name}</h4>
        <p className="Contents">{props.content}</p>
        <p className="price">{props.price}</p>
      </div>
      <div>
        <button className="addBtn">+ ADD</button>
      </div>
    </div>
  );
}

export default Pizza;
