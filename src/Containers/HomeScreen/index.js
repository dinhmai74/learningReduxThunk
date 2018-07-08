import React, { Component } from 'react'
import { Button, View } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
      <Button title="Increase"/>
      <Button title="Increase if odd"/>
      <Button title="Increase if even"/>
      </View>
    )
  }
}