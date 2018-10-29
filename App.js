import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Logo from './src/components/logo/index';
import Photobuttons from './src/components/photobuttons/index';


export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Logo />
        <Photobuttons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
