import React from 'react';
import { Background, IconGrid, Icon, Folder } from './styled';
import Window from '../window/index';
import Dock from '../dock/index';
import Menubar from '../menubar/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowType: 'Browser',
            browserIsOpen: false,
            minesweeperIsOpen: false,
            mapsIsOpen: false,
            passwordsIsOpen: false,
            instagramIsOpen: false,
            spotifyIsOpen: true,
            numOfWindowsOpen: 1,
        }
        this.toggleWindow = this.toggleWindow.bind(this);
    }
    toggleWindow(arg) {
        if (arg === 'Browser') {
            if (!this.state.browserIsOpen) { 
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen+1,
                })
            } 
            else {
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen-1,
                })
            }
            this.setState({
                windowType: arg,
                browserIsOpen: !this.state.browserIsOpen,
            });
        } else if (arg === 'Minesweeper') {
            if (!this.state.minesweeperIsOpen) { 
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen+1,
                })
            } 
            else {
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen-1,
                })
            }
            this.setState({
                windowType: arg,
                minesweeperIsOpen: !this.state.minesweeperIsOpen,
            });
        } 
        else if (arg === 'Passwords') {
            if (!this.state.passwordsIsOpen) { 
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen+1,
                })
            } 
            else {
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen-1,
                })
            }
            this.setState({
                windowType: arg,
                passwordsIsOpen: !this.state.passwordsIsOpen,
            });
        } 
        else if (arg === 'Maps' || arg === 'Map') {
            if (!this.state.mapsIsOpen) { 
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen+1,
                })
            } 
            else {
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen-1,
                })
            }
            this.setState({
                windowType: arg,
                mapsIsOpen: !this.state.mapsIsOpen,
            });
        } 
        else if (arg === 'Spotify') {
            if (!this.state.spotifyIsOpen) { 
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen+1,
                })
            } 
            else {
                this.setState({
                    numOfWindowsOpen: this.state.numOfWindowsOpen-1,
                })
            }
            this.setState({
                windowType: arg,
                mapsIsOpen: !this.state.spotifyIsOpen,
            });
        } 
    }
    render() {
        return (
            <Background>
                <Menubar></Menubar>
                <IconGrid>
                    {/* <Icon>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        The Krabby Patty Formula
                    </Icon> */}
                    {/* <Icon>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        Super Secret Files
                    </Icon> */}
                    <Icon onClick={() => {this.toggleWindow('Passwords')}}>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        Passwords<br/>(for my eyes only)
                    </Icon>
                    {/* <Icon onClick={() => {this.toggleWindow('Instagram')}}>
                        <Folder>
                            <FontAwesomeIcon icon={faFolder} />
                        </Folder>
                        Professional Stuff
                    </Icon> */}
                </IconGrid>
                {this.state.browserIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        windowKind={'Browser'}
                        browserIsOpen={this.state.browserIsOpen}
                        numOfWindowsOpen={this.state.numOfWindowsOpen}
                    ></Window>
                )}
                {/* {this.state.minesweeperIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        minesweeperIsOpen={this.state.minesweeperIsOpen}
                        numOfWindowsOpen={this.state.numOfWindowsOpen}
                    ></Window>
                )} */}
                {this.state.passwordsIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        passwordsIsOpen={this.state.passwordsIsOpen}
                        numOfWindowsOpen={this.state.numOfWindowsOpen}
                    ></Window>
                )}
                {this.state.mapsIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        windowKind={'Maps'}
                        mapsIsOpen={this.state.mapsIsOpen}
                        numOfWindowsOpen={this.state.numOfWindowsOpen}
                    ></Window>
                )}
                {this.state.spotifyIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        windowKind={'Spotify'}
                        spotifyIsOpen={this.state.spotifyIsOpen}
                        numOfWindowsOpen={this.state.numOfWindowsOpen}
                    ></Window>
                )}
                {this.state.instagramIsOpen && (
                    <Window
                        toggleWindow={this.toggleWindow}
                        windowType={this.state.windowType}
                        instagramIsOpen={this.state.instagramIsOpen}
                        numOfWindowsOpen={this.state.numOfWindowsOpen}
                    ></Window>
                )}
                <Dock
                   windowIsOpen={this.state.windowIsOpen}
                   toggleWindow={this.toggleWindow} 
                   mailToLink={this.mailToLink}
                   browserIsOpen={this.state.browserIsOpen}
                   minesweeperIsOpen={this.state.minesweeperIsOpen}
                   passwordsIsOpen={this.state.passwordsIsOpen}
                   spotifyIsOpen={this.state.spotifyIsOpen}
                   mapsIsOpen={this.state.mapsIsOpen}
                   instagramIsOpen={this.state.instagramIsOpen}
                ></Dock>
            </Background>
        )
    }
}

export default Desktop;