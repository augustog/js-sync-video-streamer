import React from 'react';
import {Component} from 'react';

import {Play, Pause, FullScreen} from './Controls.jsx';


const states = {
    PLAYING : 'PLAYING',
    BUFFERING: 'BUFFERING',
    PAUSED: 'PAUSED',
    IDLE: 'IDLE'
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

    render(){

        return (
            <div className="player-container">
                <video className="video">
                    <source src={this.state.src} type={"video/"+this.state.srcType} />
                    Your browser does not support video tags, get serious dude.
                </video>
                <Play />
                <Pause />
                <FullScreen />
            </div>
        );

    }
}

export default Player;
