import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.87);
`;

const Content = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101;
    overflow: auto;
    text-align: center;
    padding: 4px;
    cursor: pointer;
`;

const Dialog = styled.div`
    position: relative;
    margin-top: 12em;
    width: 27em;
    display: inline-block;
    vertical-align: middle;
    cursor: default;
    border-radius: 4px;
`

class Modal extends React.Component {
    onOverlayClick() {
        this.props.onClose();
    }

    onDialogClick(event) {
        event.stopPropagation();
    }

    render() {
        const overlayStyle = this.props.overlayStyle ? this.props.overlayStyle : {};
        const contentStyle = this.props.contentStyle ? this.props.contentStyle : {};
        const dialogStyle = this.props.dialogStyle ? this.props.dialogStyle : {};
        return (
            <div>
                <Overlay style={overlayStyle} />
                <Content style={contentStyle} onClick={this.onOverlayClick.bind(this)}>
                    <Dialog style={dialogStyle} onClick={this.onDialogClick}>
                        {this.props.children}
                    </Dialog>
                </Content>
            </div>
        );
    }
}

export default Modal;