import React, { Component } from 'react';
import styles from './../styles/week.css';
import DatePicker from 'material-ui/DatePicker';
import Day from './Day.jsx';

const Week = (props) => {

  const { weeksData, weekNum } = props;

  const dayArr = [];
  for (let i = 0; i < 7; i += 1) {
    dayArr.push(<Day key={i+'week'+weekNum} dayData={weeksData[i]} />);
  }
  
  return (
    <div className="row">
      {dayArr}
    </div>
  );
};

export default Week;
