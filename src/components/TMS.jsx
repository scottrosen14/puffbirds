import React from 'react';
import ToDoList from './ToDoList.jsx';
import AddToDo from './AddToDo.jsx';
import Paper from 'material-ui/Paper';
import {grey300, purple50} from 'material-ui/styles/colors';
import axios from 'axios';

class TMS extends React.Component {
  constructor(props) {
    console.log("TMS Constructor");
    super(props);
    this.state = {
      data: []
    };

    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    axios.get('/api/todo')
    .then((response) => {
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
  }

  addTask(task) {
    axios.post('/api/todo/add', { task })
    .then((response) => {
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
  }

  removeTask(taskId) {
    axios.post('/api/todo/remove', { taskId })
    .then((response) => {
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });  
  }

  // updateData() {
  //   let data = this.state;
  //   fetch('/api/todos', {
  //   method: "POST",
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify(data) });
  // }
  

  render() {
     const tmsStyle = {
       height: '100%',
       width: '70%',
       margin: 20,
       backgroundColor: purple50,
       float: 'left',
     }
    return (
      <Paper style={tmsStyle} zDepth={5}>
        <div id="TMS">
          <h1>TO DO LIST</h1>
          <ToDoList
            tasks={this.state.data}
            remove={this.removeTask}
          />
          <AddToDo addTask={this.addTask} />
        </div>
      </Paper>
    );
  }
}

export default TMS;