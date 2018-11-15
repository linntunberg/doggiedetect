import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default class Dogapi extends Component {

  render() {
// console.log(this.state.dataSource);
    if (this.props.isLoading) {
      console.log("loading");
      return (
        <View style={styles.container}>

        </View>
      )
    } else {
      console.log(this.props.dataSource);
      return (
        <FlatList
          data={this.props.dataSource}
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
