import React, { Component } from 'react';
import styles from './../styles/day-view.css';

const EventRow = (props) => {

  const { month, year, day, eventStr, eventRowSelected } = props;

  function rowClicked() {
    console.log("rowClicked");
    const input = document.getElementById('event-input');
    input.value = eventStr;
    eventRowSelected();
  }

  return (
    <div className="event-row-container" onClick={rowClicked}>
      {eventStr}
    </div>
  );
};

export default EventRow;