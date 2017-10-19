import React from 'react';
import Task from './Task.jsx';

const ToDoList = (props) => {

  const { tasks, remove } = props;
  
  const toDoItem = tasks.map((task, i) => <Task key={i+'t'} task={task} remove={remove} />);
  return (
    <ul>{toDoItem}</ul>
  );
};

export default ToDoList;
