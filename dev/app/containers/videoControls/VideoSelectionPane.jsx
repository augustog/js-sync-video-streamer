import React from 'react'
import { Component } from 'react'
import { Card, CardHeader, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import HardwareCast from '../../../../node_modules/material-ui/svg-icons/hardware/cast'

export default class VideoSelectionPane extends Component {

    constructor(props){
        super(props);
        this.handleTouchTap = this.handleTouchTap.bind(this); //Random spell to make things work
        this.state = {
            VideoURL: ''
        }
    }

    handleTouchTap(action){
        switch(action){
            case 'SELECT': {
                this.props.onVideoUpdate(this.state.VideoURL);
                break;
            }
        }
    }


    render(){
        return (
            <Card>
                <CardHeader
                    title="Video Selection"
                    subtitle="Select the source of the video you want to stream"
                    avatar={<HardwareCast />}
                />
                <CardActions>
                    <TextField
                        hintText="URL of Streaming Source"
                        onChange={(e) => {this.setState({VideoURL:e.target.value})}}
                    />
                    <RaisedButton
                        label = "Update"
                        onTouchTap={(e) => {e.preventDefault(); this.handleTouchTap('SELECT')}}
                    />
                </CardActions>
            </Card>
        );
    }
}
    
