import React, { Component } from 'react';
import styles from './../styles/calendar.css';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker'

const CalendarHeading = (props) => {

  const { month, year } = props;
  
  const firstDay = new Date(`${month}/01/${year}`);
  const monthName = firstDay.toLocaleString("en-us", { month: "long" });
  
  const datePickerStyle = {
    backgroundColor: "blue",
    display: "inline-block",
    zIndex: 0
  };



  //<DatePicker style={datePickerStyle}  hintText="" mode="landscape" />
  return (
    <div className="cal-heading">
      <button className="button button-hover-shadow">{'\u25c0'}</button>  
      <div className="cal-heading-center">
        <div className="cal-heading-text"> {monthName} {year} </div>
      </div>
      <button className="button button-hover-shadow">{'\u25b6'}</button>
    </div>
  );
};

export default CalendarHeading;
