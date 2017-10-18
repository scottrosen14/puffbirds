import React, { Component } from 'react';
import styles from './../styles/week.css';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const Day = (props) => {

  const { dayData } = props;

  const dayOfMonth = Object.keys(dayData).filter((key) => !Number.isNaN(parseInt(key)))[0];
  const dayType = dayData.thisMonth ? "day-text" : "day-text-grey";

  let bodyText = '';
  if (dayData[dayOfMonth].length > 0) {
    bodyText = 'Info'
  }


  return (
    <div className="day">
      <div className="day-heading">
        <div className={dayType}>
          {dayOfMonth}
        </div>
      </div>
      <div className="day-body">
        {bodyText}
      </div>
    </div>
  );
};

export default Day;