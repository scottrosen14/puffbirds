import React, { Component } from 'react';
import styles from './../styles/week.css';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const Day = (props) => {

  const { dayData } = props;

  const dayOfMonth = Object.keys(dayData).filter((key) => !Number.isNaN(parseInt(key)))[0];

  return (
    <div className="day">
      {dayOfMonth}
    </div>
  );
};

export default Day;