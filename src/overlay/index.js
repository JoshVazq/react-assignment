import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CloseIcon from '../icons/close.svg';

/* global document:false */

class Overlay extends Component {
    constructor(props) {
        super(props);
        this.overlayContainer = document.createElement('div');
        document.body.appendChild(this.overlayContainer);
    }

    componentWillUnmount() {
        document.body.removeChild(this.overlayContainer);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="absolute absolute--fill flex justify-center items-center bg-overlay">
                <div className="absolute w-100 h-100 h-75-ns w-60-ns">
                    <CloseIcon
                        onClick={this.props.onClose}
                        onKeyPress={event => (event.key === 'Enter' ? this.props.onClose() : null)}
                        role="button"
                        tabIndex="0"
                        className="h1 w1 ma2 pa2 absolute fill-white pointer outline-0 z-1"
                    />
                    {this.props.children}
                </div>
            </div>,
            this.overlayContainer,
        );
    }
}

Overlay.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Overlay;
