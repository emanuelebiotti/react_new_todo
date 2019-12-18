import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {   
            task: 'walk the dog',
            done: false
        },
        {
            task: 'buy some milk',
            done: false
        },
        {
            task: 'have some gaming time',
            done: false
        },
        {
            task: 'get a xmas present for girlfriend',
            done: false
        },
        {
            task: 'go to the gym',
            done: true
        },
        {
            task: 'hang out with friends',
            done: false
        },
        {
            task: 'buy some food',
            done: true
        },
        {
            task: 'get some rest',
            done: false
        }
      ]      
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <h1>My new todo list</h1>
        <Todo todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;