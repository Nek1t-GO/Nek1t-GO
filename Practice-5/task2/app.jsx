import React from "react";
import ReactDOM from "react-dom";

// Определяем объект с данными клиента
const customer = {
    first_name: "Bob",  // Имя клиента
    last_name: "Dylan"  // Фамилия клиента
};

// Создаем элемент JSX, который будет отображаться в DOM
const output = (
    <div>
        <h1>My name is {customer.first_name}</h1>  {/* Отображаем имя клиента */}
        <h2>My last name is {customer.last_name}</h2>  {/* Отображаем фамилию клиента */}
    </div>
);

// Рендерим элемент JSX в элементе с id "myDiv"
ReactDOM.render(output, document.querySelector("#myDiv"));
