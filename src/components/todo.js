import React, { Component } from "react";
import { Link } from "react-router-dom";

import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Button } from 'react-bootstrap';

import Score from './score';

class Todo extends Component {

    state = {
        showComments: false

    }

    updateShowComments = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    render() {

        let src = "";
        var comments

        if (this.props.image) {
            src = require("../assets/images/recipes/" + this.props.image);

        } else {
            src = require("../assets/images/recipes/food.png");
        }


        if (this.props.data.comments) {
            comments = this.props.data.comments.map((comment, index) =>
                <li
                    key={index} >
                    <p className="font-italic">
                        "{comment.content}"
                </p>
                    <p className="text-right">
                        <em>
                            <small>{comment.user.name}</small>
                        </em>
                    </p>
                </li>)
        } else {
            comments = []
        }

        return (

            <ListGroup.Item
                onClick={this.props.toggleComplete}
                style={
                    {
                        textDecoration: this.props.complete ? " line-through" : ""
                    }
                }>
                <Row>
                    <Col sm={1}>
                        <Link to={`/recipe`} className="nav-link">
                            <img src={src} alt={this.props.data.name} width="50px" />
                        </Link>
                    </Col>
                    <Col sm={11}>
                        <Row>
                            <Col>
                                <Score score={this.props.score} numberStars="5" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>{this.props.data.name}</Col>
                        </Row>
                        <Row>
                            <Col>

                                {this.props.data.description} <Link to={`/recipe`} >
                                    See more
                            </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="link" onClick={() => this.updateShowComments()}>
                                    {!this.state.showComments ? 'View comments' : 'Hide comments'}
                                </Button>
                                <ul>
                                    {
                                        this.state.showComments &&
                                        comments
                                    }
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </ListGroup.Item>
        )
    }
}

export default Todo;