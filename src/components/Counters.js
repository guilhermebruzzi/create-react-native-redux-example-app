import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'

import Counter from './Counter'
import Button from './Button'

const Counters = (props) => {
  const {
    newCounter,
    countersState: { counters },
    decrement,
    increment,
    incrementWithDelay,
  } = props

  const counterElems = Object.keys(counters).map((id) => {
    const value = counters[id]
    return (
      <Counter
        key={id}
        decrementFn={() => decrement(id)}
        incrementFn={() => increment(id)}
        incrementWithDelayFn={() => incrementWithDelay(id)}>
        {value}
      </Counter>
    )
  })

  return (
    <View style={styles.container}>
      {counterElems}
      <Button style={styles.addBtn} onClick={newCounter}>Add New Counter</Button>
    </View>
  )
}

Counters.propTypes = {
  countersState: PropTypes.object.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  incrementWithDelay: PropTypes.func.isRequired,
  newCounter: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  addBtn: {
    marginTop: 50,
  },
})

export default Counters
