import React from 'react';

import {View, Text, SafeAreaView, Dimensions, Image} from 'react-native';
const {height, width} = Dimensions.get('window');
const ProfileScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('InitialScreen');
  }, 3000);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#2CCFDD',
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={{alignSelf: 'center', height: '20%', width: '30%'}}
          source={require('../Assests/taxi.png')}
        />
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          Taxi
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
