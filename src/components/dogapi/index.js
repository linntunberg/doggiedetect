import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList } from 'react-native';
import { API_KEY } from 'react-native-dotenv';


export default class Dogapi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null, //going to be empty until we set the results from the api
    }
  }

  componentDidMount() {

      return fetch(`https://api.thedogapi.com/v1/breeds?API_KEY=${API_KEY}`)
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

  render() {
// console.log(this.state.dataSource);
    if (this.state.isLoading) {
      console.log("loading");
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      console.log(this.state.dataSource);
      // return(<View><Text>Wah</Text></View>)
      return (
        <FlatList
          data={this.state.dataSource}
          renderItem={
            ({item}) => (
              <Text>{item.name}</Text>
            )
          }
          keyExtractor={item => item.id.toString()}
        />
      ) //map function to map everything in the data source. value, and key, which is breed.
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  }

});
