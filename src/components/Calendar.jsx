import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Canvas from './Canvas.jsx';
import Paper from 'material-ui/Paper';
import {grey300, purple50} from 'material-ui/styles/colors';
import styles from './../styles/calendar.css';
import CalendarHeading from './CalendarHeading.jsx';
import Week from './Week.jsx';
import DayView from './DayView.jsx';
import axios from 'axios';

class Calendar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { selectedDay: 1 };
    this.updateStateWithData = this.updateStateWithData.bind(this);
    this.createEventData = this.createEventData.bind(this);
  }

  componentWillMount() {
    const today = new Date(Date.now());
    console.log("componentWillMount");
    console.log("today", today);

    const month = today.getMonth() + 1; 
    const year = today.getFullYear();
    this.createEventData(month, year);
    this.updateStateWithData(month, year);
  }


  createEventData(month, year) {
    const eventData = Array(6).fill(null).map(week => Array(7).fill(null).map(day => new Object()));
    const firstDay = new Date(year, month-1, 1);
    const dayOfWeekMonthStart = firstDay.getDay();
    const lastDayOfMonth = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0).getDate();

    let dayOfMonth = 1;
    let dayOfNewMonth = 1;
    for (let week = 0; week < 6; week += 1) {
      for (let day = 0; day < 7; day += 1) {
        const thisDayObj = eventData[week][day];
        if (week === 0 && day < dayOfWeekMonthStart) {
          const dateBeforeMonth = new Date(firstDay.getTime() + ((day - dayOfWeekMonthStart) * 24 * 60 * 60 * 1000)).getDate();
          thisDayObj[dateBeforeMonth] = [];
          thisDayObj.thisMonth = false;
          continue;
        }
        if (week >= 4 && dayOfMonth > lastDayOfMonth) {
          thisDayObj[dayOfNewMonth] = [];
          thisDayObj.thisMonth = false;
          dayOfNewMonth += 1;
          continue;
        }
        thisDayObj[dayOfMonth] = [];
        thisDayObj.thisMonth = true;
        dayOfMonth += 1;
      }
    }
    this.setState({ month, year, eventData });
  }

  updateStateWithData(month, year) {
    
    const eventData = Array(6).fill(null).map(week => Array(7).fill(null).map(day => new Object()));
    const body = { month, year };

    const that = this;
     axios.post('/api/cal', {
      month,
      year
    })
    .then((response) => {
      const results = response.data;
      const firstDay = new Date(year, month-1, 1);
      const dayOfWeekMonthStart = firstDay.getDay();
      const lastDayOfMonth = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0).getDate();

      console.log("firstDay", firstDay);
      let dayOfMonth = 1;
      let dayOfNewMonth = 1;
      for (let week = 0; week < 6; week += 1) {
        for (let day = 0; day < 7; day += 1) {
          const thisDayObj = eventData[week][day];
          if (week === 0 && day < dayOfWeekMonthStart) {
            const dateBeforeMonth = new Date(firstDay.getTime() + ((day - dayOfWeekMonthStart) * 24 * 60 * 60 * 1000)).getDate();
            thisDayObj[dateBeforeMonth] = [];
            thisDayObj.thisMonth = false;
            continue;
          }
          if (week >= 4 && dayOfMonth > lastDayOfMonth) {
            thisDayObj[dayOfNewMonth] = [];
            thisDayObj.thisMonth = false;
            dayOfNewMonth += 1;
            continue;
          }
          thisDayObj[dayOfMonth] = results.filter((event) => {
            return event.day === dayOfMonth;
          });
          thisDayObj.thisMonth = true;
          dayOfMonth += 1;
        }
      }
      console.log("eventData", eventData);
      that.setState({ month, year, eventData });
    })
    .catch(function (error) {
      console.log("SCOTT ERROR: ", error);
    });
  };

  render() {
    const infiniteStyle = {
       height: '100%',
       width: '70%',
       margin: 20,
       backgroundColor: purple50,
       float: 'left',
    };
    
    
    
    const weekArr = [];
    for (let i = 0; i < 6; i += 1) {
      weekArr.push(<Week key={i+'week'} weeksData={this.state.eventData[i]} weekNum={i} />);
    }

    return (
      <div>
        <DayView month={this.state.year} year={this.state.year} day={this.state.selectedDay} />
        <Paper style={infiniteStyle} zDepth={5}>
          <div id="TMS">
            <h1>CALENDAR</h1>
            <div className="container" >
              <CalendarHeading month={this.state.month} year={this.state.year} updateStateWithData={this.updateStateWithData} />
              <div className="calendar"> 
                {weekArr}
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );

    
  };


}

export default Calendar;