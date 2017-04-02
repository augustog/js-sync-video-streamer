/**
 * Created by augusto on 18/2/17.
 */

import React from 'react'

import {Component} from 'react'

//import "node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react'

import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import getMuiTheme from '../../../node_modules/material-ui/styles/getMuiTheme'
import darkBaseTheme from '../../../node_modules/material-ui/styles/baseThemes/darkBaseTheme'

import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import Slider from 'material-ui/Slider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import HardwareCast from '../../../node_modules/material-ui/svg-icons/hardware/cast'
import Person from '../../../node_modules/material-ui/svg-icons/social/person'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'

import PeerSelectionPane from './rtc/PeerSelectionPane.jsx'
import VideoSelectionPane from './videoControls/VideoSelectionPane.jsx'
import VideoControls from './videoControls/VideoControls.jsx'
import {SpacingBlock} from './../components/LayoutComponents.jsx'


const paddedBoxStyle = {
    padding: '20px 20px 20px 20px'
}

const muiTheme = getMuiTheme(darkBaseTheme);

class AppLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Drawer
                        open={this.state.open}
                        width={300}
                        style={paddedBoxStyle}
                    >
                        <div style={{height:"100px"}}></div>
                        <VideoSelectionPane
                            onVideoUpdate = {(data) => {console.log('[UI] Attempted video source update to ' + data)}}
                        />
                        <div style={{height:"100px"}}></div>
                        
                        <PeerSelectionPane
                            onUserConnect = {(data) => {console.log('[UI] Attempted connection with' + data)}}
                            onUserDisconnect = {(data) => {console.log('[UI] Attempted disconnection')}}
                        />


                        <RaisedButton
                            label="Close"
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px'
                            }}
                            onTouchTap={this.handleToggle}
                        >
                        </RaisedButton>
                    </Drawer>

                    <div
                        id="controls"
                        style={{
                            ...paddedBoxStyle,
                            position: 'fixed',
                            bottom: '0px',
                            width: '100%',
                            height: '40px',
                            textAlign: 'center'
                        }}
                    >

                        <SpacingBlock />

                        <RaisedButton
                            label="Player Settings"
                            onTouchTap={this.handleToggle}
                        >
                        </RaisedButton>

                        <SpacingBlock />

                        <VideoControls
                            onPlayPauseToggle={() => {console.log('[UI] PlayPause')}}
                            onFullscreenToggle={() => {console.log('[UI] Fullscreen')}}
                            onSeek={(e) => {console.log('[UI] Seek' + e);}}
                        />

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default AppLayout;