import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  return (
    <div>
      <Input
        color="primary"
        type="text"
        onChange={(e) => setCurrentTodo(e.target.value)}
      ></Input>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setTodoList((todoList) => [...todoList, currentTodo])}
      >
        Add Todo
      </Button>
      <hr></hr>

      {todoList.map((todo) => (
        <ListItem key={todo}>
          <ListItemText primary={todo} />
        </ListItem>
      ))}
    </div>
  );
}

export default Todo;
