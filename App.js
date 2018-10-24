import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/logo/index';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
    logo: {
      fontSize: 70,
      textAlign: 'center',
  },
});
