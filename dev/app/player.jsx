import React from 'react';
import {Component} from 'react';
//import {Promise} from 'react-promise';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import Snackbar from 'material-ui/Snackbar';


const states = {
    PLAYING : 5,
    PAUSED: 4,
    READY: 3,
    BUFFERING: 0,
    IDLE: -1,
}

class Player extends Component {

    constructor(props){
        super(props);

        var srcComponents = props.src.split('.');

        this.state = {
            src: props.src,
            srcType: srcComponents[srcComponents.length - 1],
            state: states.IDLE
        }
    }

    setState(state){
        this.state = state;
        //TODO: Broadcast state change to peer
    }

    broadcastToPeers(data){
        //TODO: Implement
    }

    //State-changing hooks
    play = (data) => this.setState(states.PLAYING);
    pause = (data) => this.setState(states.PAUSED);
    canPlayThrough = (data) => this.setState(states.READY);
    buffering = (data) => this.setState(states.BUFFERING);

    //Broadcast hooks
    progress = (data) => this.broadCastToPeers('progress', data);
    seek = (data) => this.broadCastToPeers('seeked', data);

    render(){

        return (
            <div className="player-container">
                <Video
                    id="video"
                    className="video"
                    ref={(video)=>{this.video = video;}}
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    onPlay={this.play}
                    onPause={this.pause}
                    onSeeked={this.seek}
                    onProgress={this.progress}
                    onCanPlayThrough={this.canPlayThrough}
                    onWaiting={this.buffering}
                    
                >
                    <source src={this.state.src} type={"video/"+this.state.srcType} />
                    Your browser does not support video tags, so sad :(
                </Video>
                <Snackbar
                    open={true}
                    message={"State: "+this.state}
                />
            </div>
        );

    }
}


export default Player;
