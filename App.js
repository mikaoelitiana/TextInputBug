/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const instructions = "1. Fill first input \n2. Press 'Display another field' button \n3. Change second field valued\n4. Press first field again";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{instructions}</Text>
        <TextInput
          value={this.state.firstField}
          onChangeText={firstField => this.setState({ firstField })}
          backgroundColor={"white"}
          style={{ padding: 10, borderColor: "grey", width: 200, margin: 5 }}
          type="email"
          autoCorrect={false}
        />
        {!this.state.displayPassword && (
          <Button title="Display another field" onPress={() => this.setState({ displayPassword: true })} />
        )}
        {this.state.displayPassword && (
          <TextInput
            value={this.state.anotherField ? this.state.anotherField : "try to change me"}
            onChangeText={anotherField => this.setState({ anotherField })}
            backgroundColor={"white"}
            style={{ padding: 10, borderColor: "grey", width: 200, margin: 5 }}
            type="password"
            autoCorrect={false}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
