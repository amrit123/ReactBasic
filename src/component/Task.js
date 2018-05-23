import React, { Component } from 'react';
import ToDoList from "./ToDoList";




class Task extends Component {
  deleteTask=(id)=>{

this.props.onDelete(id);
  }
  saveTask=(id,newVal)=>{
this.props.onSave(id,newVal);
  }
  render() {
    
let items;
if(this.props.task){
  items=this.props.task.map((item,i)=>{
   
return(
  <ToDoList onSave={this.saveTask} onDelete={this.deleteTask} key={i} items={item}/>
);
  });
  
}
    return (
      <div className="taskList">
      <br/>
       <div>List of Task</div>
       {items}
      
      </div>
    );
  }
}

export default Task;
