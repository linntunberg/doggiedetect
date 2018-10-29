import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export class Logo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>DoggieDetect</Text>
        <Text style={styles.titletext}>What kind of dog is that? We'll tell you!</Text>
      </View>
    )
  }
}

export default Logo;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 50,
  },
  titletext: {
    textAlign: 'center',
    fontSize: 20,
  },
  logo: {
    fontSize: 70,
    textAlign: 'center',
  },

});
