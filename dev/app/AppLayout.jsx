/**
 * Created by augusto on 18/2/17.
 */

import React from 'react'

import {Component} from 'react'

import Player from './Player.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import Slider from 'material-ui/Slider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import HardwareCast from 'material-ui/svg-icons/hardware/cast'
import Person from 'material-ui/svg-icons/social/person'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'

import { Layout, LayoutSplitter } from 'react-flex-layout'

const paddedBoxStyle = {
    padding: '20px 20px 20px 20px'
}


const muiTheme = getMuiTheme(darkBaseTheme);

class SpacingBlock extends Component {

    constructor(props){
        super(props);
        this.width = "20px";

        if (props.width)
            this.width = props.width+"px";

    }

    render(){
        return (
            <div style={{width: this.width, display: "inline-block"}}></div>
        );
    }
}

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
                        <Card>
                            <CardHeader
                                title="Video Selection"
                                subtitle="Select the source of the video you want to stream"
                                avatar={<HardwareCast />}
                            />
                            <CardActions>
                                <TextField
                                    hintText="URL of Streaming Source"
                                />
                                <RaisedButton
                                    label = "Update"
                                />
                            </CardActions>
                        </Card>
                        <div style={{height:"100px"}}></div>
                        <Card>
                            <CardHeader
                                title="Peer Selection"
                                subtitle="Select who to share this with"
                                avatar={<Person />}
                            />
                            <CardActions>
                                <TextField
                                    hintText="UID of User"
                                />
                                <RaisedButton
                                    label="Connect"
                                />
                                <RaisedButton
                                    label="Disconnect"
                                />
                            </CardActions>
                        </Card>


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

                        <RaisedButton
                            label="Play/Pause"
                        ></RaisedButton>

                        <SpacingBlock />

                        <div style={{width:'60vw', height:'40px', display:'inline-block'}}>
                            <Slider></Slider>
                        </div>

                        <SpacingBlock />

                        <RaisedButton
                            label="Full Screen"
                        >
                        </RaisedButton>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default AppLayout;