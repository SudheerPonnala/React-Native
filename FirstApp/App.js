/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  Picker,
  ScrollView,
  Modal,
  TouchableHighlight
} from 'react-native';
import Home1 from './components/home/home';
import Aboutus from './components/about/aboutus';
import Login from './components/login/login';
import Modalpopup from './components/modal/modal';
import Registration from './components/registration/registration';

type Props = {};
export default class App extends Component<Props> {
     validateUser(){

     }
     constructor(){
      super();
     this.state = {
    modalVisibleJoin: false
  };
}

  setModalVisibleJoin(visible) {
    this.setState({modalVisibleJoin: visible});
  }
     render(){
        return(
          <View style={styles1.container}>

             <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisibleJoin}
                onRequestClose={() => {
                  alert('Modal has been closed.');
                }}>
                <View>
                  <View style={{padding: 10, flexDirection: 'row'}}>
                    <TouchableHighlight style={{paddingRight: 0}}
                      onPress={() => {
                        this.setModalVisibleJoin(!this.state.modalVisibleJoin);
                      }}>
                      <Text style={{fontSize: 20}}>X</Text>
                    </TouchableHighlight>
                  </View>
                  <View>
                      <Registration/>
                  </View>
                </View>
              </Modal>

            <Image style={styles1.logo} source={require('./images/logo.png')}/>
            <Text style={styles1.link}>Home</Text>
            <Text style={styles1.link}>About</Text>
            <Text style={styles1.link}>Contact</Text>
            <View style={{marginRight: 10}}>
            <TouchableOpacity style={styles1.button} onPress={this.validateUser.bind(this)}>
                  <Text style={styles1.btnText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles1.button} onPress={() => {
            this.setModalVisibleJoin(true);}}>
                <Text style={styles1.btnText}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
     }   
}

const styles1 = StyleSheet.create({
  logo:{
    height: 30,
    width: 30,
    borderRadius: 100
  },
  container:{
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  link: {
    padding: 10
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#66cc66',
  }
});