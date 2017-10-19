import React, { Component } from 'react';
import styles from './../styles/week.css';
import DatePicker from 'material-ui/DatePicker';

const Day = (props) => {

  const { dayData, showDay, weekNum, dayNum } = props;

  const dayOfMonth = Object.keys(dayData).filter((key) => !Number.isNaN(parseInt(key)))[0];
  const dayType = dayData.thisMonth ? "day-text" : "day-text-grey";

  let bodyText = '';
  if (dayData[dayOfMonth].length > 0) {
    bodyText = 'Info'
  }

  function dayClicked() {
    if(dayData.thisMonth) {
      console.log("dayOfMonth", dayOfMonth);
      showDay(weekNum, dayNum, dayOfMonth);
    }
  }

  return (
    <div className="day" onClick={dayClicked} >
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