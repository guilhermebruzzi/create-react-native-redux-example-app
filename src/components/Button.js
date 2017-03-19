import React, { PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
})

const Button = (props) => {
  const { children, onClick, style, textStyle } = props

  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  style: PropTypes.any,
  textStyle: PropTypes.any,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
