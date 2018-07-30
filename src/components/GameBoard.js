import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Card from '../containers/CardContainer'
import ModalContainer from '../containers/ModalContainer';
import Timer from '../containers/TimerContainer';
import images from '../constants/images.json';
import { PlayButton } from './Form';
import { Wrapper } from './Menu';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    position: relative;
    height: 6vh;
    padding: 5px;
    backgroung-color: #efeef1;
    border: 1px solid #999;
`;

const CardContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 20px auto;
    width: 80vh;
    padding-left: 0;
`;

const CardContainerElem = styled.li`
    position: relative;
    list-style-type: none;
`;

const Button = PlayButton.extend`
    margin: 5px;
    width: auto;
    padding: 0 15px;
    font-size: 0.5em;
    border: 1px solid #e0e0e0;
`;

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            difficulty: props.difficulty,
            cardArray: [],
        };

        this.showScoreModal = this.showScoreModal.bind(this);
        this.restart = this.restart.bind(this);
        this.retakeCards = this.retakeCards.bind(this);
        this.updateScores = this.updateScores.bind(this);
    }

    retakeCards(difficulty) {
        let cardArray = [];
        for (let i = difficulty; i !== 0; i--) {
            cardArray.push({ value: Math.random(), url: images[i].url }, { value: Math.random(), url: images[i].url });
        }
        cardArray.sort((a, b) => { return b.value - a.value });

        return cardArray;
    }

    showScoreModal() {
        this.props.loadModal("SCORE_MODAL");
    }

    restart() {
        this.setState({ cardArray: this.retakeCards(this.props.difficulty) });
        this.props.restart();
    }

    gameIsOver(props, state) {
        return !(props.guessed - +state.difficulty * 2 < 0);
    }

    addNewResult() {
        this.props.addNewResult({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            time: this.props.time,
        })
    }

    updateScores() {
        let request = new Request('http://mmg-score.herokuapp.com');
        fetch(request)
            .then(response => {
                return response.json();
            })
            .then(response => {
                let playerNotes = response.result;
                let topResult = [];
                for (let i = 0; i < 10; i++) {
                    let min = { score: Number.MAX_SAFE_INTEGER };
                    for (let j = 0; j < playerNotes.length; j++) {
                        if (playerNotes[j].score <= min.score &&
                            playerNotes[j].score > 2 &&
                            !topResult.some(el => playerNotes[j]._id === el._id)) {

                            min = playerNotes[j];
                        }
                    }
                    topResult.push({
                        _id: min._id,
                        username: min.username,
                        email: min.email,
                        time: min.score,
                    });
                }
                this.props.changeResultsList(topResult.map(el => ({
                    username: el.username,
                    email: el.email,
                    time: el.time,
                })));
            });
    }

    componentWillMount() {
        this.updateScores();
        this.restart();
    }

    shouldComponentUpdate(nextProps, state) {
        if (this.gameIsOver(nextProps, state)) {
            this.props.loadModal("END_OF_GAME_MODAL");
            this.addNewResult();
        }
        return true;
    }


    render() {
        return (
            <Wrapper>
                <Header>
                    <Button onClick={this.showScoreModal}><span> Score </span></Button>
                    <Timer />
                    <Button onClick={this.restart}><span> Restart </span></Button>
                    <Link to="/">
                        <Button onClick={this.handleSubmit}><span>Change Player Profile</span></Button>
                    </Link>
                </Header>
                <CardContainer>
                    {this.state.cardArray.map((el, i) =>
                        <CardContainerElem key={`${el.url}+${el.value}`}>
                            <Card url={el.url} index={i} />
                        </CardContainerElem>
                    )}
                </CardContainer>
                <ModalContainer />
            </Wrapper>
        );
    }
}

export default GameBoard; 