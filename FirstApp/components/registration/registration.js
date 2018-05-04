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
  TouchableHighlight
} from 'react-native';
// import Home1 from './components/home/home';
// import Aboutus from './components/about/aboutus';
// import Login from './components/login/login';
// import Modalpopup from './components/modal/modal';

type Props = {};
export default class Registration extends Component<Props> {
  titleSelected(){

  }
  validateUser(){

  }
  constructor(){
    super();
    this.state = {
        pickervaluedate:'',
        pickervaluemonth:'',
        pickervalueyear:'',
        buttonColor:''
    };
  }

  titleSelected=()=>{
      this.setState({ buttonColor: 'black' }); 
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      
          <View style={{alignItems: 'center'}}>
              <Image style={styles.logo} source={require('../../images/logo.png')}/>
              <Text style={{fontWeight: 'bold'}}>WELCOME</Text>
          </View>
          <View style={{alignItems: 'center'}}>
              <Text>Accurate Personal information is Required the Verifivation and Security of your Account</Text>
          </View>
          <View style={{marginTop:10}}>
              <Text>Title</Text>
          </View>
              <View style={{flexDirection:'row'}}>

              <TouchableHighlight underlayColor = {'#3A954B'} 
                   style={this.state.buttonColor=="Mr"?styles.buttonActive:styles.button}
                    onPress={()=>this.setState({buttonColor:"Mr"})}
                    >
                 <Text style={this.state.buttonColor=="Mr"?styles.textcolorActive:styles.textcolor}> Mr. </Text>
             </TouchableHighlight >
               <TouchableHighlight underlayColor = {'#3A954B'}
                   style={this.state.buttonColor=="Mrs"?styles.buttonActive:styles.button}
                    onPress={()=>this.setState({buttonColor:"Mrs"})}
                    >
                 <Text style={this.state.buttonColor=="Mrs"?styles.textcolorActive:styles.textcolor}> Mrs. </Text>
             </TouchableHighlight>
               <TouchableHighlight underlayColor = {'#3A954B'}
                   style={this.state.buttonColor=="Ms"?styles.buttonActive:styles.button}
                    onPress={()=>this.setState({buttonColor:"Ms"})}
                    >
                 <Text style={this.state.buttonColor=="Ms"?styles.textcolorActive:styles.textcolor}> Ms. </Text>
             </TouchableHighlight>
          </View>

          <View style={{marginBottom: 10}}>
              <Text>First Name</Text>
              <TextInput style={styles.TextInput}
                  underlineColorAndroid={'transparent'}
                  placeholder='Sample Name'
              />
          </View>
          <View style={{marginBottom: 10}}>
              <Text>Last Name</Text>
              <TextInput style={styles.TextInput}
                  underlineColorAndroid={'transparent'}
                  placeholder='Sample Last Name'
              />
          </View>
          <View style={{marginBottom: 10}}>
              <Text>Date of Birth</Text>
              <View style={{flexDirection: 'row'}}>
                  <Picker style={{width: '30%'}} mode="dropdown" selectedValue={this.state.pickervaluedate} onValueChange={(itemValue,index) => this.setState({pickervaluedate: itemValue})}>
                      <Picker.Item label="Date" value=""/>
                      <Picker.Item label="1" value="1"/>
                      <Picker.Item label="2" value="2"/>
                      <Picker.Item label="3" value="3"/>
                      <Picker.Item label="4" value="4"/>
                      <Picker.Item label="5" value="5"/>
                      <Picker.Item label="6" value="6"/>
                      <Picker.Item label="7" value="7"/>
                      <Picker.Item label="8" value="8"/>
                  </Picker>
                  <Picker style={{width: '35%'}} mode="dropdown" selectedValue={this.state.pickervaluemonth} onValueChange={(itemValue,index) => this.setState({pickervaluemonth: itemValue})}>
                      <Picker.Item label="Month" value=""/>
                      <Picker.Item label="Jan" value="1"/>
                      <Picker.Item label="Feb" value="2"/>
                      <Picker.Item label="Mar" value="3"/>
                      <Picker.Item label="Apr" value="4"/>
                      <Picker.Item label="May" value="5"/>
                      <Picker.Item label="Jun" value="6"/>
                      <Picker.Item label="Jul" value="7"/>
                      <Picker.Item label="Aug" value="8"/>
                  </Picker>
                  <Picker style={{width: '35%'}} mode="dropdown" selectedValue={this.state.pickervalueyear} onValueChange={(itemValue,index) => this.setState({pickervalueyear: itemValue})}>
                      <Picker.Item label="Year" value=""/>
                      <Picker.Item label="2018" value="1"/>
                      <Picker.Item label="2017" value="2"/>
                      <Picker.Item label="2016" value="3"/>
                      <Picker.Item label="2015" value="4"/>
                      <Picker.Item label="2014" value="5"/>
                      <Picker.Item label="2013" value="6"/>
                      <Picker.Item label="2012" value="7"/>
                      <Picker.Item label="2011" value="8"/>
                      <Picker.Item label="2010" value="9"/>
                      <Picker.Item label="2009" value="10"/>
                      <Picker.Item label="2008" value="11"/>
                      <Picker.Item label="2007" value="12"/>
                      <Picker.Item label="2006" value="13"/>
                  </Picker>
              </View>  
          </View>

          <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%'}}>
                  <Text>City</Text>
                  <Picker mode="dropdown" selectedValue={this.state.pickervaluecity} onValueChange={(itemValue,index) => this.setState({pickervaluecity: itemValue})}>
                      <Picker.Item label="City" value=""/>
                      <Picker.Item label="Hyderabad" value="1"/>
                      <Picker.Item label="Mumbai" value="2"/>
                      <Picker.Item label="Delhi" value="3"/>
                      <Picker.Item label="Chennai" value="4"/>
                  </Picker>
              </View>
              <View style={{width: '50%'}}>
                  <Text>Country</Text>
                  <Picker mode="dropdown" selectedValue={this.state.pickervaluecountry} onValueChange={(itemValue,index) => this.setState({pickervaluecountry: itemValue})}>
                      <Picker.Item label="Country" value=""/>
                      <Picker.Item label="India" value="1"/>
                      <Picker.Item label="UK" value="2"/>
                      <Picker.Item label="RSA" value="3"/>
                      <Picker.Item label="USA" value="4"/>
                  </Picker>
              </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom:10}}>
              <View style={{width: '40%',paddingRight: 3}}>
                  <Text>Postcode</Text>
                  <TextInput style={styles.TextInput}
                      underlineColorAndroid={'transparent'}
                      placeholder='000000'
                  />   
              </View>
              <View style={{width: '60%'}}>
                  <Text>House No & Street Name</Text>
                  <TextInput style={styles.TextInput}
                      underlineColorAndroid={'transparent'}
                      placeholder='No 7 of Example Street'
                  />
              </View>
          </View>

          <View style={{flexDirection: 'row', marginBottom:10}}>
              <View style={{width: '40%',paddingRight: 3}}>
                  <Text>Country Code</Text>
                  <TextInput style={styles.TextInput}
                      underlineColorAndroid={'transparent'}
                      placeholder='+374'
                  />   
              </View>
              <View style={{width: '60%'}}>
                  <Text>Mobile Number</Text>
                  <TextInput style={styles.TextInput}
                      underlineColorAndroid={'transparent'}
                      placeholder='8297085253'
                  />
              </View>
          </View>

          <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%',paddingRight: 3}}>
                  <Text>Language</Text>
                  <Picker mode="dropdown" selectedValue={this.state.pickervaluelanguage} onValueChange={(itemValue,index) => this.setState({pickervaluelanguage: itemValue})}>
                      <Picker.Item label="Language" value=""/>
                      <Picker.Item label="English" value="1"/>
                      <Picker.Item label="Spanish" value="2"/>
                      <Picker.Item label="Hindi" value="3"/>
                      <Picker.Item label="Arabic" value="4"/>
                  </Picker>
              </View>
              <View style={{width: '50%'}}>
                  <Text>Currency</Text>
                  <Picker mode="dropdown" selectedValue={this.state.pickervaluecurrency} onValueChange={(itemValue,index) => this.setState({pickervaluecurrency: itemValue})}>
                      <Picker.Item label="Currency" value=""/>
                      <Picker.Item label="INR" value="1"/>
                      <Picker.Item label="EUR" value="2"/>
                      <Picker.Item label="USD" value="3"/>
                      <Picker.Item label="LYD" value="4"/>
                  </Picker>
              </View>
          </View>

          <View style={{marginBottom: 10}}>
              <Text>Email</Text>
              <TextInput style={styles.TextInput}
                  underlineColorAndroid={'transparent'}
                  placeholder='Sample@sample.com'
              />
          </View>

          <View style={{marginBottom: 10}}>
              <Text>Username</Text>
              <TextInput style={styles.TextInput}
                  underlineColorAndroid={'transparent'}
                  placeholder='Sample_0000'
              />
          </View>

         <View style={{marginBottom: 10}}>
              <Text>Password</Text>
              <TextInput style={styles.TextInput}
                  secureTextEntry={true}
                  underlineColorAndroid={'transparent'}
                  placeholder='Password '
              />
          </View>

          <View style={{marginBottom: 10}}>
              <Text>Confirm Password</Text>
              <TextInput style={styles.TextInput}
                  secureTextEntry={true}
                  underlineColorAndroid={'transparent'}
                  placeholder='Reenter Password '
              />
          </View>

          <View style={{alignItems: 'center'}}>
              <Text>By Creating a new account i accept the <Text style={{color: '#66cc66'}}>terms and conditions</Text>, the <Text style={{color: '#66cc66'}}>privacy policy</Text> and confirm that i am ove 18 years of age. it is an offence to gamble if under age</Text>
          </View>

          <View>
              <TouchableOpacity style={styles.buttonjoin} onPress={this.validateUser.bind(this)}>
                  <Text style={styles.btnText}>Join</Text>
              </TouchableOpacity>
          </View>

          
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  TextInput: {
    alignSelf: 'stretch',
    height: 40,
    borderColor: '#e0e0d1',
    borderWidth: 1,
    // borderRadius: 5,
   
    borderColor: 'black'
  },
  logo:{
    height: 40,
    width: 40,
    borderRadius: 100
  },
  container:{
    margin: 10,
    marginTop: 0,
    padding: 5,
    marginBottom: 50
    
  },
  link: {
    padding: 5
  },
  buttonjoin: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#66cc66',
    marginTop: 10,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 50
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderWidth: 0.5,
    
    
  },
  buttonActive : {
     alignItems: 'center',
    backgroundColor: '#3A954B',
    padding: 10,
    borderWidth: 0.5,
    
  },
  textcolorActive: {
    color:'#FFF'
  },
  textcolor : {
    color:'#1D1D1D'
  }
});