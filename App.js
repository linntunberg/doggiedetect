import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Logo from './src/components/logo/index';
import Photobuttons from './src/components/photobuttons/index';
import Dogapi from './src/components/dogapi/index';

export default class App extends React.Component {
  constructor(props) {
  super(props);
  // this.state = { mood: 'decent' };
}

  render() {

    return (
      <View style={styles.container}>
      // <Text>{this.state.mood}</Text>
        <Logo />
        <Photobuttons />
        <Dogapi />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});
