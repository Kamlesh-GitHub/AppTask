import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const SigninScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          padding: width * 0.03,
        }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <Image
          style={styles.signin}
          resizeMode="contain"
          source={require('../Assests/Signin.png')}
        />

        <Image
          resizeMode="contain"
          style={styles.Logo}
          source={require('../Assests/mainlogo.png')}
        />

        <Text style={styles.welcomeText}>Welcome to Equip Taxi Driver </Text>

        <View>
          <View style={styles.mobilelableview}>
            <Text style={styles.mobilelabletext}>Mobile no.</Text>
          </View>
          <TextInput style={styles.mobileNoInput} />
        </View>

        <TouchableOpacity>
          <Text style={styles.remembermetext}> Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PasscodeScreen')}
          style={styles.SigninButton}>
          <Text style={styles.SigninButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Image
          resizeMode="contain"
          style={styles.carImage}
          source={require('../Assests/flexendlogo.png')}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={styles.newusertext}> I'm new user, </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('InitialScreen')}>
            <Text style={styles.signtext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  signin: {
    width: width * 0.4,
    height: height * 0.05,
  },

  Logo: {
    height: height * 0.13,
    alignSelf: 'center',
    width: width * 0.5,
  },
  welcomeText: {
    fontSize: width * 0.04,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: height * 0.03,
    color: '#102B3D',
  },
  mobileNoInput: {
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: '#808080',
    marginTop: height * 0.08,
    fontSize: width * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mobilelableview: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: width * 0.115,
    left: width * 0.06,
    padding: 5,
    zIndex: 50,
  },

  mobilelabletext: {
    color: 'grey',
  },
  SigninButton: {
    width: width * 0.95,
    height: height * 0.065,
    backgroundColor: '#2CCFDD',
    borderRadius: 15,
    marginTop: height * 0.02,
    justifyContent: 'center',
  },
  SigninButtonText: {
    fontSize: width * 0.06,
    textAlign: 'center',
    color: '#FFF',
  },
  carImage: {
    width: width * 0.9,
    height: height * 0.2,
    marginTop: height * 0.18,
    alignSelf: 'center',
    opacity: 0.3,
  },
  newusertext: {
    fontSize: width * 0.04,
    color: '#000',
    textAlign: 'center',
  },
  signtext: {
    fontSize: width * 0.04,
    color: '#2CCFDD',
  },
  remembermetext: {
    alignSelf: 'flex-end',
    fontSize: width * 0.04,
    marginTop: height * 0.03,
    color: 'grey',
  },
});
