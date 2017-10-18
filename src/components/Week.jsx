import React, { Component } from 'react';
import styles from './../styles/week.css';
import DatePicker from 'material-ui/DatePicker';
import Day from './Day.jsx';

const Week = (props) => {

  const { weeksData, weekNum, showDay } = props;

  const dayArr = [];
  for (let i = 0; i < 7; i += 1) {
    dayArr.push(<Day key={i+'week'+weekNum} dayData={weeksData[i]} weekNum={weekNum} dayNum={i} showDay={showDay} />);
  }
  
  return (
    <div className="row">
      {dayArr}
    </div>
  );
};

export default Week;
