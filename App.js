import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Logo from './src/components/logo/index';
import Photobuttons from './src/components/photobuttons/index';
import Dogapi from './src/components/dogapi/index';
import { ImagePicker, FileSystem } from 'expo';
// import Functions from './src/functions/index.js';

export default class App extends React.Component {
    state = {
      isLoading: true,
      dataSource: null, //going to be empty until we set the results from the api
  }

  componentDidMount() {

      return fetch('https://api.thedogapi.com/v1/breeds?API_KEY=9ab8981a-551b-4d9e-821d-467a83c83771')
        .then ( (response) => response.json() ) //taking the response from the API and convert it to a json object
        .then ( (responseJson) => { //taking the json object

          this.setState({
            isLoading: false, //not loading any more because now we have the data
            dataSource: responseJson, //the array of breeds
          })
        })

      .catch((error) => {
        console.log(error)
      });
  }

  uploadPhoto = async () =>
  { console.log("yes")
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
    });
    console.log(result)
    this.vision(result.base64) //'this' calls on something in the same class, sends back the base64 result

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
    console.log(camera.uri)

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
    //.then(console.log)
    .then(data => {
      console.log(this.state.dataSource); //name-dogapi
      console.log(data.responses[0].labelAnnotations); //description-visionapi

      var dogarray = this.state.dataSource;
      var visionarray = data.responses[0].labelAnnotations;

      visionarray.forEach((result) => {
        const founddog = dogarray.find((dog) => {
          return result.description === dog.name.toLowerCase()
        })
        if (founddog)
        this.setState({founddog: founddog})
      })
    })
    .catch(console.log)
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Photobuttons uploadPhoto = {this.uploadPhoto} takePhoto = {this.takePhoto}/>
        <Text style={styles.dogbreed}>{this.state.founddog && this.state.founddog.name}</Text>
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
  dogbreed: {
    fontSize: 20,
    margin: 20,
  }


});
