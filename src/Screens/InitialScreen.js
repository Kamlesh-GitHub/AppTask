import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  useWindowDimensions,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
const InitialScreen = ({navigation}) => {
  const [secureEntry, setSecureEntry] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: height * 0.01,
          backgroundColor: '#fff',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <Image
          style={styles.signimage}
          source={require('../Assests/initiallogo.png')}
          resizeMode="contain"></Image>
        <Image
          style={styles.mainimage}
          source={require('../Assests/mainlogo.png')}
          resizeMode="contain"></Image>
        <Text style={styles.taglinetext}>Welcome To Equip Taxi Driver</Text>
        <View>
          <View style={styles.namelabelview}>
            <Text style={{color: 'grey'}}>Full name</Text>
          </View>
        </View>
        <TextInput placeholder="" style={styles.nameinput}></TextInput>
        <View>
          <View style={styles.mobilelebelview}>
            <Text style={{color: 'grey'}}>Mobile No.</Text>
          </View>
        </View>

        <TextInput placeholder="" style={styles.mobileinput}></TextInput>
        <View>
          <View style={styles.emaillebelview}>
            <Text style={{color: 'grey'}}>E-mail</Text>
          </View>
        </View>
        <TextInput placeholder="" style={styles.emailinput}></TextInput>
        <View>
          <View style={styles.passwordlebelview}>
            <Text style={{color: 'grey'}}>Password</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: 'grey',
            backgroundColor: '#FFF',
            marginTop: height * 0.02,
            borderWidth: 0.5,
            borderRadius: 15,
          }}>
          <TextInput
            maxLength={10}
            style={{fontSize: 20}}
            placeholder=""
            style={styles.passwordinput}
            secureTextEntry={secureEntry}></TextInput>

          <Icons
            onPress={() => setSecureEntry(!secureEntry)}
            name={secureEntry === false ? 'eye-outline' : 'eye-off-outline'}
            size={25}
            color="black"
            style={{alignSelf: 'center', right: '30%'}}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('PasscodeScreen')}
          style={styles.touchablecontainer}>
          <Text style={styles.touchtext}>Sign Up</Text>
        </TouchableOpacity>
        <Image
          source={require('../Assests/flexendlogo.png')}
          resizeMode="contain"
          style={styles.endimage}></Image>
        <View style={styles.endview}>
          <Text style={styles.endtext}>I'm already a member ,</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.endsign}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  signimage: {
    width: width * 0.4,
    height: height * 0.05,
    marginTop: height * 0.02,
  },
  mainimage: {
    width: width * 0.5,
    height: height * 0.13,
    alignSelf: 'center',
  },
  taglinetext: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginTop: height * 0.02,
    color: '#102B3D',
  },
  nameinput: {
    borderColor: '#2CCFDD',
    backgroundColor: '#FFF',
    marginTop: height * 0.04,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: width * 0.03,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mobileinput: {
    borderColor: '#2CCFDD',
    backgroundColor: '#FFF',
    marginTop: height * 0.04,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: width * 0.03,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emailinput: {
    borderColor: '#2CCFDD',
    backgroundColor: '#FFF',
    marginTop: height * 0.04,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: width * 0.03,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // passwordinput: {
  //   borderColor: 'grey',
  //   backgroundColor: '#FFF',
  //   marginTop: 20,
  //   borderWidth: 0.5,
  //   borderRadius: 15,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  touchablecontainer: {
    width: width * 0.95,
    height: height * 0.065,
    backgroundColor: '#2CCFDD',
    borderRadius: 15,
    marginTop: height * 0.02,
    justifyContent: 'center',
  },
  touchtext: {
    fontSize: width * 0.06,
    textAlign: 'center',
    color: '#FFF',
  },
  endimage: {
    width: width * 0.5,
    height: height * 0.18,
    marginTop: height * 0.02,
    alignSelf: 'center',
    opacity: 0.3,
  },
  endtext: {
    fontSize: width * 0.04,
    color: '#000',
    textAlign: 'center',
  },
  endsign: {
    fontSize: width * 0.04,
    color: '#2CCFDD',
  },
  endview: {
    flexDirection: 'row',

    alignSelf: 'center',
  },
  namelabelview: {
    position: 'absolute',
    top: height * 0.02,
    left: width * 0.06,
    padding: 5,
    zIndex: 50,
    backgroundColor: '#FFF',
  },
  mobilelebelview: {
    position: 'absolute',
    top: height * 0.02,
    left: width * 0.06,
    padding: 5,
    zIndex: 50,
    backgroundColor: '#FFF',
  },
  emaillebelview: {
    position: 'absolute',
    top: height * 0.02,
    left: width * 0.06,
    padding: 5,
    zIndex: 50,
    backgroundColor: '#FFF',
  },
  passwordlebelview: {
    position: 'absolute',
    top: height * 0.002,
    left: width * 0.05,
    padding: 5,
    zIndex: 50,
    backgroundColor: '#FFF',
  },
});

export default InitialScreen;
