/** ACTION TYPES **/

const NAME = 'create-react-native-redux-example-app/counters'
const INCREMENT = `${NAME}/INCREMENT`
const DECREMENT = `${NAME}/DECREMENT`
const ADD_NEW_COUNTER = `${NAME}/NEW`

/** ACTION CREATORS **/

// Tells the reducer which counter with specified id needs to be incremented
export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: {
      id,
    },
  }
}

// Tells the reducer which counter with specified id needs to be decremented
export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: {
      id,
    },
  }
}

// Tells the reducer, we need a new counter on the scene with a new ID
export const newCounter = () => {
  return {
    type: ADD_NEW_COUNTER,
  }
}

// Simulate async action with the help of react-thunk
export const incrementWithDelay = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT,
        payload: {
          id,
        },
      })
    }, 1000)
  }
}

/** REDUCER **/

const initialState = {
  idGen: 0,
  counters: {},
}

export default function reducer(state = initialState, action) {
  let actionId, newId

  switch (action.type) {

    case ADD_NEW_COUNTER:
      newId = state.idGen + 1

      // this reducer basically generate a new id for new counter and
      // assign value 0 to that id.

      return {
        idGen: newId,
        counters: {
          ...state.counters,
          [newId]: 0,
        },
      }
    case DECREMENT:
      actionId = action.payload.id

      // because payload contains the id and we already know that we are about
      // to decrement the value of that id, we modify only that value by one

      return {
        ...state,
        counters: {
          ...state.counters,
          [actionId]: state.counters[actionId] - 1,
        },
      }
    case INCREMENT:
      actionId = action.payload.id

      //  because payload contains the id and we already know that we are about
      // to increment the value of that id, we modify only that value by one

      return {
        ...state,
        counters: {
          ...state.counters,
          [actionId]: state.counters[actionId] + 1,
        },
      }
    default:
      return state
  }
}
