/**
 * Created by augusto on 19/2/17.
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';


import App from '../App.jsx';
import Player from '../Player.jsx';
import {Play, Pause, FullScreen} from '../Controls.jsx';
import {VideoSourceSelectionPane, ConnectionPane} from '../PeerConnection.jsx';
import CollapsibleSidePanel from '../CollapsibleSidePanel.jsx';

describe('<App />', () => {
    it('Should render a Player component', ()=>{
        expect(shallow(<App />).contains(<Player />)).toBe(true);
    });
    it('Should render a set of controls (play, pause, fullscreen)', ()=>{
        expect(shallow(<App />).contains(<Play />)).toBe(true);
        expect(shallow(<App />).contains(<Pause />)).toBe(true);
        expect(shallow(<App />).contains(<FullScreen />)).toBe(true);
    });
    it('Should render a video source selector in a settings pane', ()=>{
        expect(shallow(<App />).find('#settings').contains(<VideoSourceSelectionPane />)).toBe(true);
    });
    it('Should render a connection pane in a settings pane', ()=>{
        expect(shallow(<App />).find('#settings').contains(<ConnectionPane/>)).toBe(true);
    });
    
    console.log(shallow(<App />).debug());
    //TODO: Add tests for integration of components
});
