import React from 'react'
import { Component } from 'react'
import { Card, CardHeader, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Person from '../../../../node_modules/material-ui/svg-icons/social/person'


export default class VideoSelectionPane extends Component {

    constructor(props){
        super(props);
        this.handleTouchTap = this.handleTouchTap.bind(this); //Random spell to make things work
        this.state = {
            UID: ''
        }
    }

    handleTouchTap(action){
        switch(action){
            case 'CONNECT': {
                this.props.onUserConnect(this.state.UID);
                break;
            }
            case 'DISCONNECT': {
                this.props.onUserDisconnect({});
                break;
            }
        }
    }



    render(){
        return (
            <Card>
                <CardHeader
                    title="Peer Selection"
                    subtitle="Select who to share this with"
                    avatar={<Person />}
                />
                <CardActions>
                    <TextField
                        hintText="UID of User"
                        onChange={(e) => {this.setState({UID: e.target.value})}}
                    />
                    <RaisedButton
                        label="Connect"
                        onTouchTap={(e) => {e.preventDefault(); this.handleTouchTap('CONNECT')}}
                    />
                    <RaisedButton
                        label="Disconnect"
                        onTouchTap={(e) => {e.preventDefault(); this.handleTouchTap('DISCONNECT')}}
                    />
                </CardActions>
            </Card>
        );
    }
}

