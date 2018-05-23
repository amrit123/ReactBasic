import React, { Component } from 'react'

export default class ToDoList extends Component {
  constructor(){
    super();
    this.state={
      edit:false
    }

  }

  editTask=()=>{
   this.setState({edit:true});
        }
        deleteTask=()=>{
          this.props.onDelete(this.props.items.id);
          
    
        }
        SaveEdit=()=>{
          const newVal=this.refs.editTask.value;
          this.props.onSave(this.props.items.id,newVal);
          this.setState({edit:false});
        }
        renderNormal=()=>{
          return(
            <li className="items">
            {this.props.items.task} 
            <button className="editButton" onClick={this.editTask}>edit</button>
            <button  className="deleteButton" onClick={this.deleteTask}>delete</button>
          </li>
          );
        }
        renderEdit=()=>{
          return(
          <li className="editItems"> 
        <input type="text" ref="editTask"  defaultValue={this.props.items.task} placeholder="enter the task" id="editTaskId"/>
        <button className="saveButton" onClick={this.SaveEdit}>save</button>
      </li>
    );
        }
  render() {
   if(this.state.edit){
    return (
      this.renderEdit() 
    )
  }
    else{
      return(
        this.renderNormal()
      )
    }
   }
   
  }

