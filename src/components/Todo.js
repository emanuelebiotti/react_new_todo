import React, {Component} from 'react';
import {useState} from 'react';

const Todo = (props) => {

    const [todoState, setTodoState] = useState({
        ...props,
    });

    const handleStateChange = (key) => {
        const newArray = todoState.todos.map((el, idx) => {
            if (key === idx) {
                el.done = !el.done
            }
            return el
        })
        setTodoState({
            todos: newArray
        })
    }

    console.log(todoState.todos);
    console.log(setTodoState);
    console.log(props);
    

    return (
        <div>
            <h1> WIP list</h1>
            <ul>
                <li>
                    {todoState.todos.map((todo, key) => (
                        !todo.done ? <p onClick={() => handleStateChange(key)}> {todo.task} </p> : null             
                    ) )}
                </li>
            </ul>
            <h1> Done list </h1>
            <ul>
                <li>
                    {todoState.todos.map(todo => (
                        todo.done ? <p> {todo.task} </p> : null
                    ))}
                </li>
            </ul>
        </div>
    )
}


/* class Todo extends Component {

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

    handleStateChange = (key) => {
        const newArray = this.state.todos.map((el, idx) => {
            if (key === idx) {
                el.done = !el.done
            }
            return el
        })
        this.setState({
            todos: newArray
        })
    }
    
    render(){
        return (
            <div>
                <h1> WIP list</h1>
                <ul>
                    <li>
                        {this.state.todos.map((todo, key) => (
                            !todo.done ? <p onClick={() => this.handleStateChange(key)}> {todo.task} </p> : null             
                        ) )}
                    </li>
                </ul>
                <h1> Done list </h1>
                <ul>
                    <li>
                        {this.state.todos.map(todo => (
                            todo.done ? <p> {todo.task} </p> : null
                        ))}
                    </li>
                </ul>
            </div>
        )
    }
}
 */

export default Todo;