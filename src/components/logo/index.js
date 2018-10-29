import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export class Logo extends Component {
  render() {
    return (
      <View style={styles.logo}>
        <Text style={styles.title}>DoggieDetect</Text>
        <Image
        source={require('../../icons/pawprint.png')}
        style={styles.pawprint}
        />
        <Text style={styles.titletext}>What kind of dog is that? We'll tell you!</Text>
      </View>
    )
  }
}

export default Logo;

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 50,
    margin: 20,
  },

  pawprint: {
    width: 150,
    height: 150,
    margin: 20,
  },

  titletext: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  },



});
