import React from 'react';
import {Component} from 'react';
//import {Promise} from 'react-promise';


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

    play(data){
        //TODO: Implement promise-based async method
        this.video.play();
        this.state = states.PLAYING;
    }

    pause(data){
        //TODO: Implement promise-based async method
        this.video.pause();
        this.state = states.PAUSED;
    }

    fullscreen(data){
        throw "Not implemented yet"; //TODO: Implement fullscreen control
    }

    render(){

        return (
            <div className="player-container">
                <video id="video"className="video" ref={(video)=>{this.video = video;}}>
                    <source src={this.state.src} type={"video/"+this.state.srcType} />
                    Your browser does not support video tags, get serious dude.
                </video>

                <Play onActivate={this.play}/>
                <Pause onActivate={this.pause}/>
                <FullScreen onActivate={this.fullscreen}/>
            </div>
        );

    }
}

export default Player;
