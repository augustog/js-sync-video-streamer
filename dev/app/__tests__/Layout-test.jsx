/**
 * Created by augusto on 19/2/17.
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';


import App from '../Layout.jsx';
import Player from '../Player.jsx';
import {VideoSourceSelectionPane, ConnectionPane} from '../PeerConnection.jsx';

describe('<App />', () => {
    it('Should render a Player component', ()=>{
        expect(shallow(<App />).contains(<Player />)).toBe(true);
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
