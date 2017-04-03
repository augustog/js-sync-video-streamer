import VideoControls from '../components/VideoControls.jsx'
import {connect} from 'react-redux' 

function mapStateToProps(state, ownProps){
    return {};
}
function mapDispatchToProps(dispatch, ownProps){
    return {};
}

const VideoControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoControls);

export default VideoControlsContainer;
