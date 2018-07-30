import React, { Component } from 'react';
import styled from 'styled-components';
import Form from '../containers/FormContainer';

export const Wrapper = styled.div`
    height: 98vh;
    margin: 1vh;
    background-color: white;
`;

const Header = styled.header`
    padding: 30px;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
`

export const Paragraph = styled.p`
    text-align: center;
    font-size: 1.5em;    
`;

class Menu extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <Title>Let's check your memory</Title>
                    <Paragraph>This is a memory game where you need to match pairs of cards.</Paragraph>
                    <Paragraph>Playing is very simple - you turn over card and then try to find a matching one.</Paragraph>
                    <Paragraph>The player who quickly matches all pairs will win!</Paragraph>
                </Header>
                <Form />
            </Wrapper>
        );
    }
}

export default Menu;