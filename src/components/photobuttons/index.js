import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class Photobuttons extends React.Component {
  render() {
    return (
      <View style={styles.buttons}>
              <TouchableOpacity
                onPress={this.takePhoto}>
                <Text style={styles.button}>Take Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.uploadPhoto}>
                <Text style={styles.button}>Upload Photo</Text>
              </TouchableOpacity>
      </View>
    );
  }

  takePhoto = () => {
  alert('Take Photo');
  }

  uploadPhoto = () => {
  alert('Upload photo');
  }

}

const styles = StyleSheet.create({

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    padding: 6,
    borderStyle: 'solid',
    borderWidth: 3,
    width: 150,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },

});
