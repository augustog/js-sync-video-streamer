import PeerSelectionPane from '../components/PeerSelectionPane.jsx' 
import {connect} from 'react-redux'

function mapStateToProps(state, ownProps){
    return {};
}
function mapDispatchToProps(dispatch, ownProps){
    return {};
}


const PeerSelectionPaneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PeerSelectionPane);


export default PeerSelectionPaneContainer;