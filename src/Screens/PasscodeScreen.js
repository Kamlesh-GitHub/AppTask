import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const PasscodeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: 25, marginLeft: 10}}>
          <Image
            style={styles.backbuttonimage}
            source={require('../Assests/backbutton.png')}></Image>
        </TouchableOpacity>
        <Image
          source={require('../Assests/logo.png')}
          style={styles.logoimage}
          resizeMode="contain"></Image>
        <Text style={styles.passcodetext}>Passcode Verification</Text>
        <View style={styles.container2}>
          <Text style={styles.sendtext}>Enter the passcode sent to </Text>
          <Text style={styles.simpletext}> +41 123456789 </Text>
        </View>
        <Text style={styles.numberverificationtext}>
          change verification number
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TextInput
            maxLength={1}
            textAlign="center"
            keyboardType="numeric"
            placeholder="-"
            style={styles.otpinput}></TextInput>
          <TextInput
            placeholder="-"
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
            style={styles.otpinput2}></TextInput>
          <TextInput
            placeholder="-"
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
            style={styles.otpinput3}></TextInput>
          <TextInput
            placeholder="-"
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
            style={styles.otpinput4}></TextInput>
        </View>
        <View style={styles.container4}>
          <Text style={styles.codetext}>Don't receive the code </Text>
          <TouchableOpacity>
            <Text style={styles.resendcodetext}> Resend Code </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={styles.touchablecontainer}>
          <Text style={styles.touchtext}>Verify & Proceed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasscodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: height * 0.02,
  },
  backbuttonimage: {
    width: width * 0.05,
    height: height * 0.03,
    marginTop: height * 0.03,
  },
  logoimage: {
    width: width * 0.5,
    height: height * 0.4,
    alignSelf: 'center',
  },
  passcodetext: {
    fontSize: width * 0.04,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: height * 0.01,
  },
  sendtext: {
    fontSize: width * 0.03,
    color: 'grey',
    textAlign: 'center',
    marginTop: height * 0.005,
  },

  simpletext: {
    fontSize: width * 0.04,
    color: '#000',

    fontWeight: 'bold',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: height * 0.03,
    alignSelf: 'center',
  },
  numberverificationtext: {
    fontSize: width * 0.04,
    color: '#2CCFDD',
    textAlign: 'center',
    marginTop: height * 0.03,
  },
  otpinput: {
    borderColor: 'grey',
    backgroundColor: '#dcdcdc',
    marginTop: height * 0.02,
    borderWidth: 0.5,
    borderRadius: 7,
    fontSize: width * 0.05,
    width: width * 0.12,
    height: height * 0.08,
  },
  otpinput2: {
    borderColor: 'grey',
    backgroundColor: '#dcdcdc',
    marginTop: height * 0.02,
    borderWidth: 0.5,
    borderRadius: 7,
    fontSize: width * 0.05,
    width: width * 0.12,
    height: height * 0.08,
  },

  otpinput3: {
    borderColor: 'grey',
    backgroundColor: '#dcdcdc',
    marginTop: height * 0.02,
    borderWidth: 0.5,
    borderRadius: 7,
    fontSize: width * 0.05,
    width: width * 0.12,
    height: height * 0.08,
  },
  otpinput4: {
    borderColor: 'grey',
    backgroundColor: '#dcdcdc',
    marginTop: height * 0.02,
    borderWidth: 0.5,
    borderRadius: 7,
    fontSize: width * 0.05,
    width: width * 0.12,
    height: height * 0.08,
  },
  codetext: {
    fontSize: width * 0.03,
    color: 'grey',
    textAlign: 'center',
    marginTop: height * 0.003,
  },

  resendcodetext: {
    fontSize: width * 0.035,
    color: '#2CCFDD',
    textAlign: 'center',
  },
  container4: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: height * 0.04,
    alignSelf: 'center',
  },
  touchablecontainer: {
    width: width * 0.95,
    height: height * 0.065,
    backgroundColor: '#2CCFDD',
    borderRadius: 15,
    marginTop: height * 0.035,
    justifyContent: 'center',
  },
  touchtext: {
    fontSize: width * 0.05,
    textAlign: 'center',
    color: '#FFF',
  },
});
