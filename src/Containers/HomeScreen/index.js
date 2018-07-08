import React, { Component } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";

import { incrementIfOdd, increment, incrementAsync } from "../../Actions/index";

class HomeScreen extends Component {
  render() {
    console.log("props", this.props);
    return (
      <View>
        <Button title="Increase" onPress={() => this.props.increment()} />
        <Button
          title="Increase async"
          onPress={() => this.props.incrementAsync()}
        />
        <Button
          title="Increase if odd"
          onPress={() => this.props.incrementIfOdd()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { incrementIfOdd, increment, incrementAsync }
)(HomeScreen);
