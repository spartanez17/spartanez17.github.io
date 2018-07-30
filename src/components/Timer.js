import React, { Component } from 'react'
import styled from 'styled-components';

const TimeHolder = styled.span`
    position: absolute;
    left: 3vw;
    top: 2.8vh;
`;

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            counter: 0
        };
        this.tick = this.tick.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.guessed - +props.difficulty * 2 === 0 && !this.timer) {
            clearInterval(this.state.timer);
            this.setState({ timer: null });
            this.props.setTime(this.state.counter);
        }
        if (props.time === -1) {
            clearInterval(this.state.timer);
            let timer = setInterval(this.tick, 100);
            this.setState({ timer: timer, counter: 0 });
        }
        return true;
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 100);
        this.setState({ timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    tick() {
        this.setState({
            counter: +(this.state.counter + 0.1).toFixed(1),
        });
        this.props.setTime(this.state.counter);
    }
    render() {
        return <TimeHolder>Your time: {(this.state.counter).toFixed(1)} sec</TimeHolder>
    }
}