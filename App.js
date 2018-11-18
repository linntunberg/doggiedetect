import React from 'react';
import { StyleSheet, View, Button, Text, Image, ImageStore, ImageEditor } from 'react-native';
import Logo from './src/components/logo/index';
import Photobuttons from './src/components/photobuttons/index';
import { ImagePicker, FileSystem, Camera, Permissions } from 'expo';

export default class App extends React.Component {
    state = {
      isLoading: true,
      dataSource: null, //going to be empty until we set the results from the api
  }

  componentDidMount() { //when this component is loaded, it runs
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

  uploadPhoto = async () => {
    let upload = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      base64: true,
    });
    this.vision(upload.base64) //'this' calls on something in the same class, sends back the base64 result
  }

  takePhoto = async () => {
    let camera = await ImagePicker.launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      base64: true,
      quality: 1,
    });
    this.cropImage(camera.uri)
    .then(data => this.vision(data))
    .catch(console.log)
  }

  cropImage = (image) => {
    return new Promise(
      (resolve, reject) => {
        Image.getSize(image, (width, height) => {
          let imageSettings = {
            offset: { x: 0, y: 0 },
            size: { width: width, height: height }
          };
          ImageEditor.cropImage(image, imageSettings, (uri) => {
            ImageStore.getBase64ForTag(uri, (data) => {
              resolve(data)
            }, e => reject("getBase64ForTag: ", e))
          }, e => reject("cropImage: ", e))
        })
      }
    )
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
      console.log(this.state.dataSource); //name-dogapi array
      console.log(data.responses[0].labelAnnotations); //description-visionapi array

      var dogarray = this.state.dataSource; //here we simply put the array in a variable
      var visionarray = data.responses[0].labelAnnotations;

      visionarray.forEach((result) => { //for each result from the visionapi (all of the different suggestions or results we get in the vision response)
        const founddog = dogarray.find((dog) => { //here we create a variable for a find function that goes through the dog api. 'dog' is just a name, so just a reference to each index, value
          return result.description === dog.name.toLowerCase() //if the vision api is equal to the dog api, return
        })
        if (founddog) //if the dog is found in the api, set the state to founddog, then in the render it states that if founddog, and the name is in the api, return.
        this.setState({founddog: founddog}) //double checks
      })
    })
    .catch(console.log) //in render, it states, if founddog is true, then print out the name
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
