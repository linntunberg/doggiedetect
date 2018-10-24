import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Doggie Detect</Text>
        
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
      // alignItems: 'center',
      // justifyContent: 'center',
      fontSize: 70,
      textAlign: 'center',
  },
});
