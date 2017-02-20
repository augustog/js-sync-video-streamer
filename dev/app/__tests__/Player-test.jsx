/**
 * Created by augusto on 19/2/17.
 */

import {Play, Pause, FullScreen} from '../Controls.jsx';

describe('<Player />', () => {
    it('Should render a set of controls (play, pause, fullscreen)', ()=> {
        expect(shallow(<Player />).contains(<Play />)).toBe(true);
        expect(shallow(<Player />).contains(<Pause />)).toBe(true);
        expect(shallow(<Player />).contains(<FullScreen />)).toBe(true);
    });
});