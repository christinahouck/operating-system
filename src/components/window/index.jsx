import React from 'react';

import { Rnd } from "react-rnd";
import { WindowContainer, WindowTopBar, WindowControlButton, BrowserIframe } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'

class Window extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Rnd
                default={{
                    x: 160,
                    y: 90,
                    width: 800,
                    height: 600
                }}
            >
            <WindowContainer>
                <WindowTopBar>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faMinus} 
                            alt="Minimize" 
                        />
                    </WindowControlButton>
                    <WindowControlButton>
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            alt="Close window" 
                            onClick={this.props.toggleWindow}
                        />
                    </WindowControlButton>
                </WindowTopBar>
                <BrowserIframe src="http://example.com/"></BrowserIframe>
            </WindowContainer>
            </Rnd>
        )
    }
}

export default Window;