import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap';
import Score from '../components/score';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import data from '../assets/data.json'
import { IfFirebaseAuthed } from "@react-firebase/auth";

export default class Recipe extends React.Component {

    render() {

        let recipe = data[0];
        let src = require("../assets/images/recipes/" + recipe.image);

        const ingredients = recipe.ingredients.map((ingredient, index) =>
            <li
                key={index} >
                {ingredient.amount}
                {ingredient.name}
            </li>)

        const steps = recipe.steps.map((step, index) =>
            <p
                key={index} >
                <strong>{index + 1}.</strong> {step}
            </p>)


        return (
            <Container>
                <Row>
                    <Col>
                        <Link to={`/recipe`} className="nav-link">
                            <img src={src} alt={recipe.name} width="200px" />
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Score score={recipe.score} numberStars="5" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>{recipe.name}</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    {recipe.description}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Ingredients</h3>
                        <ul>

                            {ingredients}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Steps</h3>
                        {steps}
                    </Col>
                </Row>
                <IfFirebaseAuthed>
                <Row>
                    <Col>
                        <h3>Comment</h3>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment the recipe</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <br />
                    </Col>
                </Row>
                </IfFirebaseAuthed>
                <IfFirebaseAuthed>
                <Row>
                    <Col>
                        <h3>Rate</h3>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Rate the recipe</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
                </IfFirebaseAuthed>
                <Link to={`/`} className="nav-link">go back </Link>
            </Container>
        )
    }

}