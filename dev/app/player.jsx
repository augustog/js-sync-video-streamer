import {Component} from 'react';


const states = {
    PLAYING : 'PLAYING',
    BUFFERING: 'BUFFERING',
    PAUSED: 'PAUSED',
    IDLE: 'IDLE'
}

class Player extends Component {

    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            state: states.IDLE
        }
    }

    render(){
        var videoType = this.state.src.split('.')[-1];

        return (
            <video>
                <source src="{this.props.src}" type="video/{videoType}" />
                Your browser does not support video tags, get serious dude.
            </video>
        );

    }
}

export default Player;
