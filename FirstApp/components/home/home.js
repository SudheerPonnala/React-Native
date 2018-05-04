import React, { Component } from 'react';
import {
  Text,
  View, Button
} from 'react-native';

export default class Home1 extends Component {
  hello(){
    alert("Home Component");
  }
  render() {
    return (
      <View>
        <Text>
            Welcome to Home 1 page!
        </Text>
        <Button title="Home" onPress={this.hello}></Button>
      </View>
    );
  }
}
