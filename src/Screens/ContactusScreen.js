import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const App = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: width * 0.04,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <Text
          style={{
            fontSize: width * 0.045,
            color: '#000',

            marginTop: height * 0.03,
            fontWeight: '700',
          }}>
          Get a quote
        </Text>
        <Text
          style={{
            fontSize: width * 0.036,
            color: '#000',
            marginTop: height * 0.02,
            fontWeight: '700',
          }}>
          {
            'Drop us the mail or use our online chat features and\nwe will answer your queries.'
          }
        </Text>
        <Image
          source={require('../Assests/emailimage.png')}
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            width: width * 0.96,
            height: height * 0.45,
          }}
        />
        <TouchableOpacity
          style={{
            width: width * 0.92,
            height: height * 0.065,
            backgroundColor: '#2CCFDD',
            borderRadius: 15,
            marginTop: height * 0.02,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: width * 0.06,
              textAlign: 'center',
              color: '#FFF',
            }}>
            Send e-mail
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../Assests/contactuslogo.png')}
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            width: width * 0.4,
            height: height * 0.15,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;
