import React,{Component} from 'react';

import './App.css';
import Todos from './Todos.js' ; 
import Add from './Add.jsx';

export default class todo extends Component
{
  state={
    todo:[{id:1,contenu:"se lever "},{id:2,contenu:"brosser les dents"}]
  }
  add = (contenu1) =>
  {
    contenu1.id = this.state.todo.length +1;
    let todoss =[...this.state.todo, contenu1]; 
    this.setState({todo : todoss});
    console.log(this.state)
  }
  render(){
    return (
      <div className="container">
     <p>this is a to do application </p> 
     <Todos todolist={this.state.todo} />
     <Add addTodo={this.add}/>
      
      </div>
    
    )
  }
}

