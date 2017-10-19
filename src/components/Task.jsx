import React from 'react';

const Task = (props) => {

  const { task, remove } = props;

  const onClick = () => { 
    remove(task._id) 
  };

  const style = {
    display: "inline-block",
    width: "17px",
    height: "17px",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: "red",
    marginLeft: "10px"
  };

  return (
    <li>{task.item} <div onClick={onClick} style={style}>X</div></li>
    );
};

export default Task;
