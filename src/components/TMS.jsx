import React from 'react';
import ToDoList from './ToDoList.jsx';
import AddToDo from './AddToDo.jsx';
import Paper from 'material-ui/Paper';
import {grey300, purple50} from 'material-ui/styles/colors';

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
    fetch('/api/todo')
      .then(response => response.json())
      .then(data => {
        return this.setState({ data: data });
      });
  }

  addTask(task) {
    const data = [...this.state.data, task];
    this.setState({ data: data });
    fetch()
  }

  removeTask(task) {
    let data = [...this.state.data];
    data.splice(data.indexOf(task), 1);
    this.setState({ data: data });

  }

  updateData() {
    let data = this.state;
    fetch('/api/todos', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data) });
  }
  

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