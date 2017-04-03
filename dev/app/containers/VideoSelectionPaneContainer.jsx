import VideoSelectionPane from '../components/VideoSelectionPane.jsx'
import {connect} from 'react-redux'

function mapStateToProps(state, ownProps){
    return {};
}
function mapDispatchToProps(dispatch, ownProps){
    return {};
}

const VideoSelectionPaneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoSelectionPane);

export default VideoSelectionPaneContainer;