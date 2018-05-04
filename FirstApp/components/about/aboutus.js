import React,{ Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Aboutus extends Component{
	hello(){
		alert("Aboutus Component");
	}
	render(){
		return(
			<View>
				<Text>
					Welcome to About us page
				</Text>
				<Button title="Aboutus" onPress={this.hello}></Button>
			</View>
		);
	}
}
