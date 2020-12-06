import React, { Component } from 'react';
import Todo from "../components/todo";
import TodoForm from "../components/todoform";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../assets/data.json'

import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from "@react-firebase/database";
import firebase from 'firebase';

class TodoList extends Component {

    state = {
        todoToShow: "all",
        todolist: [],
        limit: 20
    }

    componentDidMount() {
        this.setState({
            todolist: data
        })
    }

    addTodo = todo => {
        this.setState({
            todolist: [todo, ...this.state.todolist]
        })
    }

    toggleComplete = (id) => {

        this.setState({
            todolist: this.state.todolist.map(todo => {
                if (todo.id === id) {

                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {

                    return todo;
                }
            })
        })
    }

    updateTodoToShow = (status) => {
        this.setState({
            todoToShow: status
        })
    }


    render() {

        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todolist;
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todolist.filter(todo => todo.complete)
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todolist.filter(todo => !todo.complete)
        }

        const list = todos.map((todo, index) =>
            <Todo
                key={index}
                toggleComplete={() => this.toggleComplete(todo.id)}
                name={todo.name}
                complete={todo.complete}
                image={todo.image}
                description={todo.description}
                score={todo.score}
                comments={todo.comments}
            >
            </Todo>)

    
        return (
            <div>
                
                <h2>Latest recipes</h2>
                    <div>
                        <FirebaseDatabaseNode
                            path="recipes/"
                            limitToFirst={this.state.limit}
                            // orderByKey
                            orderByValue={"id"}
                        >
                            {

                                d => {
                                    return d.isLoading === true || d.value === null
                                        ? "Loading ..."
                                        : d.value.map((item, i) => {
                                            console.log(item)
                                            return <Todo key={i} data={item} />
                                        })
                                }
                            }
                        </FirebaseDatabaseNode>
                    </div>
               
               <a href="">Create new</a>
            </div>
        )
    }
}

export default TodoList;