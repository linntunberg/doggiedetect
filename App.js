import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Logo from './src/components/logo/index';
import Photobuttons from './src/components/photobuttons/index';
import Dogapi from './src/components/dogapi/index';
import Visionapi from './src/components/visionapi/index';

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
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
