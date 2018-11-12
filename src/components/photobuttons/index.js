import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { ImagePicker, FileSystem } from 'expo';
// import RNFetchBlob from 'rn-fetch-blob';

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

  uploadPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
    });
    console.log(result);
    this.vision(result.base64)
    // fetch("GET", result.uri)
    // .then(console.log)
  }

  takephoto = async () => {
    let camera = await ImagePicker.launchCameraAsync({
      mediaTypes: 'Images',
      exif: true,
      allowsEditing: true,
      quality: 0.7,
      base64: true,
      aspect: [4, 3]
    });
    console.log(camera.uri);

  }

  vision(image) {
    fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDGlVNOQ0QLRVmR1nV9_njdo8FIk-2w84E', {
      method: 'POST',
      body: JSON.stringify({
        "requests": [
          {
            "image": {
              "content": image
            },
            "features": [
              {
                "type": "LABEL_DETECTION"
              }
            ]
          }
        ]
      })
    })
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)
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
