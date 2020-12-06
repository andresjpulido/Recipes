import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

class TodoForm extends Component {

    state = {
        name: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit({
            name: this.state.name,
            complete: false
        })

        this.setState({ name: "" })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">+</Button>
                    </Col>
                </Row>
            </Form>

        )
    }

}
export default TodoForm;