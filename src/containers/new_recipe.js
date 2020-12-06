import React, { Component } from 'react';
import shortid from 'shortid'
import { Form, Button } from 'react-bootstrap';

import TodoForm from '../components/todoform';

export default class NewRecipe extends Component {

    render() {
        return (
            <TodoForm onSubmit={this.addTodo}></TodoForm>
        )
    }

}