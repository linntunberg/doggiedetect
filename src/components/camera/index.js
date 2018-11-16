import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { ImagePicker, FileSystem } from 'expo';

export default class Camera extends React.Component {

}


takePhoto = async () => {
  console.log('takephoto')
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  if (status != 'granted') {
    return
  }

  const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status2 != 'granted') {
    return
  }

  let camera = await ImagePicker.launchCameraAsync({
    mediaTypes: 'Images',
    exif: true,
    allowsEditing: true,
    base64: true,
  });
  this.vision(upload.base64)

}
