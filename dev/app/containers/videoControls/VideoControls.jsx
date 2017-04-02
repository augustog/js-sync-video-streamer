import React from 'react'
import {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Slider from 'material-ui/Slider'
import {SpacingBlock} from './../../components/LayoutComponents.jsx'

export default class VideoControls extends Component {

    constructor(props){
        super(props);
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    handleTouchTap(action){
        switch(action) {
            case 'PlayPauseToggle': {
                this.props.onPlayPauseToggle();
                break;
            }
            case 'FullscreenToggle': {
                this.props.onFullscreenToggle();
                break;
            }
        }
    }

    render() {
        return (
            <div style={{display: 'inline-block'}}>
                <RaisedButton
                    label="Play/Pause"
                    onTouchTap={(e) => {e.preventDefault(); this.handleTouchTap('PlayPauseToggle')}}
                />

                <SpacingBlock />

                <div style={{width:'60vw', height:'40px', display:'inline-block'}}>
                    <Slider
                        max={this.props.max}
                        min={0}
                        onChange={(e, v)=> {this.setState({sliderValue: v}); this.props.onSeek(v)}}
                    ></Slider>
                </div>

                <SpacingBlock />

                <RaisedButton
                    label="Full Screen"
                    onTouchTap={(e) => {e.preventDefault(); this.handleTouchTap('FullscreenToggle')}}
                />
            </div>
        );
    }
}