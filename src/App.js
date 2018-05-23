import React, { Component } from 'react';
import Task from "./component/Task";
import AddTask from "./component/AddTask";
import uniqid from 'uniqid';


class App extends Component {

  constructor(){
    super();
    this.state={
      taskList:[],
      edit:false
    }

  }
  componentWillMount(){

    this.setState({taskList:[{
      id:uniqid(),
      task:"learn react"
    },
    { 
      id:uniqid(),
      task:"learn redux"
    }
    
     
    ]});
  }
  handleAddTask=(newTask)=>{
    
 let newTaskList=this.state.taskList;
 newTaskList.push(newTask);
 this.setState({taskList:newTaskList});
  }
 handleDelete=(id)=>{
  let newTaskList=this.state.taskList;
  let index=newTaskList.findIndex(x=>x.id===id);
  newTaskList.splice(index,1);
  this.setState({taskList:newTaskList});
 }
 handleSave=(id,newVal)=>{
  let newTaskList=this.state.taskList;
  let index=newTaskList.findIndex(x=>x.id===id);
  newTaskList[index].task=newVal;
  this.setState({taskList:newTaskList});
   console.log(this.state.taskList);

 }
  render() {
   
    return (
      <div className="App">
     <AddTask addTask={this.handleAddTask}/>
      <Task task={this.state.taskList} onDelete={this.handleDelete} onSave={this.handleSave}/>
      </div>
    );
  }
}

export default App;

