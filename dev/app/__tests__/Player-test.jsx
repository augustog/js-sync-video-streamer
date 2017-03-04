/**
 * Created by augusto on 19/2/17.
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Player from '../Player.jsx'
import {Play, Pause, FullScreen} from '../Controls.jsx';

const states = {
    PLAYING : 'PLAYING',
    BUFFERING: 'BUFFERING',
    PAUSED: 'PAUSED',
    IDLE: 'IDLE'
}

describe('<Player />', () => {

    const wrapper = shallow(<Player src="./test.mp4"/>);

    it('Should render a video tag with class video & source tag according to src prop.', ()=>{
        expect(wrapper.find('video')).toHaveLength(1);
        expect(wrapper.find('video').find('source').props().src).toEqual("./test.mp4");
    })
    it('Should render a set of controls (play, pause, fullscreen).', ()=> {
        //TODO: Figure out how to test this
        expect(wrapper.find(Play)).toHaveLength(1);
        expect(wrapper.find(Pause)).toHaveLength(1);
        expect(wrapper.find(FullScreen)).toHaveLength(1);

    });
    
    it('Should change to "playing" state when Play is activated', ()=>{
        expect(true).toBe(false); //TODO: Implement test
    });

    it('Should change to "paused" state when Pause is activated', ()=>{
        expect(true).toBe(false); //TODO: Implement test
    });

    it('Should change to "buffering" state when Video is buffering', ()=>{
        expect(true).toBe(false); //TODO: Implement test
    });
    
    console.log(wrapper.debug());

    it('Should start in IDLE state', ()=>{
        expect(wrapper.state.state).toEqual(states.IDLE);
    })

});