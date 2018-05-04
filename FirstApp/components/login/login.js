import React, { Component } from 'react';
import {
  Text,
  View, 
  TextInput,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  ScrollView
} from 'react-native';

export default class App extends Component {
   constructor(){
      super();
      this.state = {
          username: "",
          password: "",
          rememberme: false
      }    
   }

   validateUser(){
      alert(this.state.username+" "+this.state.password);
      // fetch('https://jsonplaceholder.typicode.com/users',{
      //     method: 'GET'
      //     // ,
      //     // body:JSON.stringify({
      //     //     name: username,
      //     //     pwd: password
      //     // });
      // }).then((response) => response.json())
      // .then((responseJson)=>{
      //   alert(responseJson);
      // })
   }

   checkboxChanged(){
      this.setState({
          rememberme: !this.state.rememberme
      });
   }
   forgotUser(){
        alert("i am gone case");
   }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <View style={styles.loginform}>
          <TextInput style={styles.TextInput}
              underlineColorAndroid={'transparent'}
              placeholder='Username'
              value={this.state.username}
              onChangeText={(txt) => this.setState({username: txt})}
          />
          <TextInput style={styles.TextInput}
              underlineColorAndroid={'transparent'}
              placeholder='Password'
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(txt) => this.setState({password: txt})}
          />
          <View style={{flexDirection: 'row'}}>
          <CheckBox value={this.state.rememberme} onChange={this.checkboxChanged.bind(this)}/>
          <Text style={{marginTop: 5}}>Remember me</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.validateUser.bind(this)}>
              <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>
          <Text onPress={this.forgotUser} style={styles.forgotName}>Forgot Password?</Text>
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
    padding: 35,
    flexDirection: 'row'
  },
  loginform:{
    // alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center'
  },
  TextInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 0.5,
    backgroundColor: '#F4F4F4',
  },
  btnText: {
    fontWeight: 'bold'
  },
  forgotName: {
    textDecorationLine: 'underline', 
    marginLeft: 65
  }
});


