import React, { Component } from 'react';
import styles from './../styles/day-view.css';

const Button = (props) => {

  const { clickedFunc, text } = props;

  return (
    <button className="event-button" onClick={clickedFunc}>{text}</button> 
  );
};

export default Button;