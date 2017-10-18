import React, { Component } from 'react';
import styles from './../styles/day-view.css';


const DayView = (props) => {

  const { month, year, day } = props;

  // const dayOfMonth = Object.keys(dayData).filter((key) => !Number.isNaN(parseInt(key)))[0];
  // const dayType = dayData.thisMonth ? "day-text" : "day-text-grey";

  // let bodyText = '';
  // if (dayData[dayOfMonth].length > 0) {
  //   bodyText = 'Info'
  // }
  console.log("I am in Day View");

  const date = new Date(year, month-1, day);


  return (
    <div className="overlay">
      <div className="day-heading">
        <div>
          {date.toDateString()}
        </div>
      </div>
      <div className="day-body">
        
      </div>
    </div>
  );
};

export default DayView;