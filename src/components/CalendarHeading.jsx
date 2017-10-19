import React, { Component } from 'react';
import styles from './../styles/calendar.css';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker'

const CalendarHeading = (props) => {

  const { month, year, updateStateWithData } = props;
  
  const firstDay = new Date(`${month}/01/${year}`);
  const monthName = firstDay.toLocaleString("en-us", { month: "long" });
  
  const datePickerStyle = {
    backgroundColor: "blue",
    display: "inline-block",
    zIndex: 0
  };

  function forwardClicked() {
    let newMonth = month + 1;
    let newYear = year;
    if(newMonth === 13) {
      newYear += 1;
      newMonth = 1;
    } 
    updateStateWithData(newMonth, newYear);
  }

  function backwardClicked() {
    let newMonth = month - 1;
    let newYear = year;
    if(newMonth === 0) {
      newYear -= 1;
      newMonth = 12;
    } 
    updateStateWithData(newMonth, newYear);
  }

  //<DatePicker style={datePickerStyle}  hintText="" mode="landscape" />
  return (
    <div className="cal-heading">
      <button className="button button-hover-shadow" onClick={backwardClicked}>{'\u25c0'}</button>  
      <div className="cal-heading-center">
        <div className="cal-heading-text"> {monthName} {year} </div>
        <div className="cal-select_ui"> back </div>

      </div>
      <button className="button button-hover-shadow" onClick={forwardClicked}>{'\u25b6'}</button>
    </div>
  );
};

export default CalendarHeading;
