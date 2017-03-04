/**
 * Created by augusto on 18/2/17.
 */

import React from 'react';

import {Component} from 'react';

import Player from './Player.jsx';
import {VideoSourceSelectionPane, ConnectionPane} from './PeerConnection.jsx';
import CollapsibleSidePanel from './CollapsibleSidePanel.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div id="app-container">
                    <Player />
                    <CollapsibleSidePanel id="settings">
                        <VideoSourceSelectionPane />
                        <ConnectionPane />
                    </CollapsibleSidePanel>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;