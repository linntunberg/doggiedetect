import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class Photobuttons extends React.Component {
  render() {
    return (
      <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.takePhoto}>
                <Text>Take Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={this.uploadPhoto}>
                <Text>Upload Photo</Text>
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
  },

  button: {
    padding: 2,
    borderStyle: 'solid',
    borderWidth: 3,
    width: 100,
    height: 30,
    margin: 10,

  },

});
