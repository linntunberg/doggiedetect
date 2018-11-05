import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { ImagePicker } from 'expo';

export default class Photobuttons extends React.Component {
  getSelectedImages(){

  }

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
  alert('This should open the phone camera, then you should be able to take a photo for photo analysis.');
  }

  uploadPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      // aspect: [4, 3],
    });

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
