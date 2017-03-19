import { connect } from 'react-redux'

import Counters from '../components/Counters'
import * as actionCreators from '../redux/modules/counters'

const createActionDispatchers = actionCreators => dispatch =>
  Object.keys(actionCreators).reduce((actionDispatchers, name) => {
    var actionCreator = actionCreators[name]
    if (typeof actionCreator == 'function') {
      actionDispatchers[name] = (...args) => dispatch(actionCreator(...args))
    }
    return actionDispatchers
  }, {})

const mapStateToProps = state => ({
  countersState: state.counters, // gives our component access to state through props.toDoApp
})
const mapDispatchToProps = createActionDispatchers(actionCreators)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters)
