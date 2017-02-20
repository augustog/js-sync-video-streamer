/**
 * Created by augusto on 19/2/17.
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Player from '../Player.jsx'
import {Play, Pause, FullScreen} from '../Controls.jsx';

describe('<Player />', () => {

    const wrapper = shallow(<Player src="./test.mp4"/>);

    it('Should render a video tag with class video & source tag according to src prop.', ()=>{
        expect(wrapper.contains(
            <video className="video">
                <source src="./test.mp4" type="video/mp4" />
                Your browser does not support video tags, get serious dude.
            </video>
                )).toBe(true);
    })

    it('Should render a set of controls (play, pause, fullscreen).', ()=> {
        expect(wrapper.contains(<Play />)).toBe(true);
        expect(wrapper.contains(<Pause />)).toBe(true);
        expect(wrapper.contains(<FullScreen />)).toBe(true);
    });

    console.log(wrapper.debug());

});