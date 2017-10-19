import React, { Component } from 'react';
import styles from './../styles/day-view.css';
import EventRow from './EventRow.jsx';
import Button from './Button.jsx';


const DayView = (props) => {

  const { month, year, day, dayData, dayViewDisplay, cancelDayView, addEvent, eventRowSelected, 
          eventButtons, deleteEvent } = props;

  const date = new Date(year, month-1, day);

  const eventsList = [];
  for (let i = 0; i < dayData.length; i += 1) {
    eventsList.push(<EventRow key={i+'daydata'} month={month} year={year} day={day} eventStr={dayData[i].event}
                              eventRowSelected={eventRowSelected} />);
  }

  function addEventClicked() {
    const input = document.getElementById('event-input');
    let inputStr = input.value.trim();
    if (inputStr.length !== 0) {
      addEvent(input.value);
    }
    input.value = '';
  }

  function updateClicked() {
      console.log("updateClicked", updateClicked);

  }

  function deleteClicked() {
      console.log("deleteClicked", deleteClicked);

  }

  const buttonsArr = [];
  if (eventButtons) {
    buttonsArr.push( <Button key="d" clickedFunc={deleteClicked} text="Delete" /> );
    buttonsArr.push( <Button key="u" clickedFunc={updateClicked} text="Update" /> );
    buttonsArr.push( <Button key="c" clickedFunc={cancelDayView} text="Cancel" /> ); 
  } else {
    buttonsArr.push( <Button key="a" clickedFunc={addEventClicked} text="Add" /> );
    buttonsArr.push( <Button key="c" clickedFunc={cancelDayView} text="Cancel" /> ); 
  }

  return (
    <div className="overlay" style={{ "display": dayViewDisplay }}>
      <div className="event">

        <div className="event-heading">
          {date.toDateString()}
        </div>
        <div className="event-body">
          {eventsList}  
        </div>
        <div className="event-footer">
          <input id="event-input" className="event-input"></input>
          <div className="event-buttons">
            {buttonsArr}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;