import React from 'react';
import Modal from './Modal';
import './ScoreModal.css';

class ScoreModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topResult: props.resultsList,
        }
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        const dialogStyle = {
            padding: '4%',
            backgroundColor: 'white',
        };
        return (
            <Modal onClose={this.onClose} dialogStyle={dialogStyle}>
                <table className="">
                    <tbody>
                        <tr>
                            <th>№</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Time</th>
                        </tr>
                        {this.state.topResult.map((el, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{el.username}</td>
                                <td>{el.email}</td>
                                <td>{el.time} s</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Modal>
        );
    }
}

export default ScoreModal;
