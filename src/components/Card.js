import React, { Component } from 'react';
import './Card.css';
import skirts from '../constants/skirts.json';
import styled from 'styled-components';

const FlipContainer = styled.div`
    width: 20vh;
    height: 20vh;
    position: relative;

    transition:.5s;
    transform-style: preserve-3d;

    -webkit-transition:.5s;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateY(0deg);

    -moz-transition:.5s;
    -moz-transform-style: preserve-3d;
    -moz-transform: rotateY(0deg);

    & div{
        display: inline-block;
        border: 2px solid #999;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    & div:first-child {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        
        -webkit-backface-visibility: hidden;
        -webkit-transform: rotateY(180deg);
    
        -moz-backface-visibility: hidden;
        -moz-transform: rotateY(180deg);
    }

    & div:last-child {
        width: 100%;
        height: 100%;
        backface-visibility: hidden;

        -webkit-backface-visibility: hidden;

        -moz-backface-visibility: hidden;
    }
`;

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
            url: this.props.url,
            status: "waiting",
            numberOfPickedCards: 0,
        };
        this.handlePickedCard = this.handlePickedCard.bind(this);
        this.updateStatus = this.updateStatus.bind(this);

    }

    handlePickedCard() {
        if (this.state.status === "waiting") {
            this.props.pickCard({
                index: this.state.index,
                url: this.state.url,
                status: this.state.status,
            })
            this.setState({ numberOfPickedCards: this.props.pickedCards.length });
        }
    }

    updateStatus() {
        if (this.state.numberOfPickedCards !== 0 && this.state.numberOfPickedCards !== 2) {
            this.props.updateStatus({
                index: this.state.index,
                url: this.state.url,
                status: this.state.status,
            })
        }
    }

    componentDidMount() {
        let background = skirts[this.props.skirt];
        this.setState({
            imageUrl: require(`../resource/${this.state.url}`),
            backUrl: require(`../resource/${background}`),
        })
    }

    componentWillReceiveProps(nextProps) {
        let currElement = nextProps.pickedCards.find((el) => el.index === this.props.index);
        if (currElement) {
            this.setState({ status: currElement.status });
        }
    }

    render() {
        let style = this.state.status === "picked" ? "flipped" : "";
        return (
            <FlipContainer className={style} onTransitionEnd={this.updateStatus} onClick={this.handlePickedCard}>
                <div style={{ backgroundImage: `url(${this.state.imageUrl})` }} />
                <div style={{ backgroundImage: `url(${this.state.backUrl})` }} />
            </FlipContainer>
        );
    }
}

export default Card; 