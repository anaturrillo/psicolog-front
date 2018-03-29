import { connect } from 'react-redux'
import { changeFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = function(state, ownProps) {

  return {active: ownProps.filter === state.filter}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeFilter(ownProps.filter))
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(Link)
