import React, { Component } from 'react'
import uniqid from 'uniqid';

export default class AddTask extends Component {
    constructor(){
        super();
        this.state={
            newTask:{}
        }
    }

    getTask=(e)=>{
        
        if(this.refs.task.value===""){
            alert("enter the task please!");
        }else{
            
            this.setState({newTask:{
                id:uniqid(),
                task:this.refs.task.value
            }},function(){
                document.getElementById("taskId").value="";
                this.props.addTask(this.state.newTask);
            })
           
          // 
        }
        e.preventDefault();
        
         } 
  render() {
    return (
      <div>
      <h3>Add New task</h3>
      <input type="text" ref="task" placeholder="enter the task" id="taskId"/> 
      <button type="submit" onClick={this.getTask}>submit</button>
      </div>
    )
  }
}
