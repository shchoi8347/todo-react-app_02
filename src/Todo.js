import React from "react";

const Todo = (props) => {
    let title = props.item;
    let name = props.name;

    return  <div className="Todo">
        <input type="checkbox" id="todo0" name="todo0" value="todo0" />
        <label for="todo0">{title} by {name}</label>
    </div>
}

export default Todo;