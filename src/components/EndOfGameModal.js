import React from 'react';
import Modal from './Modal';
import {Paragraph, Title, Wrapper} from './Menu';

const ModalTitle = Title.extend`
    color: #292929;
    margin-top: 0.8em;
`;

const ModalWrapper = Wrapper.extend`
    padding: 3em 2em;
    border-radius: 4px;
    weight: 26em;
    height: 10em;
`;

class EndOfGameModal extends React.Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        const dialogStyle = {
            backgroundColor: 'rgb(100, 65, 164)',
        };
        return (
            <Modal onClose={this.onClose} dialogStyle={dialogStyle}>
                <ModalWrapper>
                    <ModalTitle>Congratulations!</ModalTitle>
                    <Paragraph>Your time is {(this.props.time).toFixed(1)} seconds</Paragraph>
                </ModalWrapper>
            </Modal>
        );
    }
}

export default EndOfGameModal;
