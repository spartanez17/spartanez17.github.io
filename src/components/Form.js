import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PlayButton = styled.button`
    cursor: pointer;
    border: 2px solid #56309c;
    border-radius: 2px;
    background: #6441a4;
    color: #fff;
    width: 12vw;
    height: 5vh;
    &::active{
    }
    & span{
        font-size: 2em;
        color: rgb(240, 240, 240);
    }
`;

const Input = styled.input`
    position: absolute;
    top: 0;
    left: 11em;
    border: 2px solid #56309c;
    border-radius: 2px;
    background: #6441a4;
    color: #fff;
    padding: 0.5%;
    margin: 5px;
    font-size: 0.9em;
`;

const Select = styled.select`
    position: absolute;
    top: 0;
    left: 11em;
    width: 6em;
    border: 2px solid #56309c;
    border-radius: 2px;
    background: #6441a4;
    color: #fff;
    padding: 0.5%;
    margin: 5px;
    font-size: 0.9em;
`;

const Ul = styled.ul`
    padding-left: 20vw;
    & li {
        position: relative;
        padding: 10px;
        list-style-type: none;
    }
`;

const ButtonWrapper = styled.div`
    position: relative;
    left: 50%;  
    margin-left: -3.625em;
    & a {
        tabindex: -1;
    }
`;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            difficulty: props.difficulty,
            skirt: props.skirt,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        this.props.profileListener({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        });
        this.props.difficultyListener(this.state.difficulty);
        this.props.skirtListener(this.state.skirt);
    }

    render() {
        return (
            <React.Fragment>
                <Ul>
                    <li>
                        <label>
                            First Name:
                        </label>
                        <Input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label>
                            Second Name:
                        </label>
                        <Input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label>
                            Email:
                        </label>
                        <Input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label>
                            Choose difficulty:
                        </label>
                        <Select name="difficulty" value={this.state.difficulty} onChange={this.handleChange}>
                            <option value="4">Easy</option>
                            <option value="6">Normal</option>
                            <option value="8">Hard</option>
                        </Select>
                    </li>
                    <li>
                        <label>
                            Choose card's skirt:
                        </label>
                        <Select name="skirt" value={this.state.skirt} onChange={this.handleChange}>
                            <option value="LIGHT">Light</option>
                            <option value="DARK">Dark</option>
                        </Select>
                    </li>
                </Ul>
                <ButtonWrapper>
                    <Link tabIndex={-1} to="/game">
                        <PlayButton onClick={this.handleSubmit}>
                            <span>Go Play!</span>
                        </PlayButton>
                    </Link>
                </ButtonWrapper>
            </React.Fragment>
        );
    }
}

export default Form;