import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  useWindowDimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
const VehcilemanagementScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: width * 0.02,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>

        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.025,
          }}>
          Vehcile Number:
        </Text>
        <TextInput
          placeholder="AZH-5869"
          placeholderTextColor="#000"
          fontSize={width * 0.035}
          marginTop={height * 0.01}
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: width * 0.02,
          }}></TextInput>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.025,
          }}>
          Vehcile Brand:
        </Text>
        <TextInput
          placeholder="Toyota"
          placeholderTextColor="#000"
          fontSize={width * 0.035}
          marginTop={height * 0.01}
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: width * 0.02,
          }}></TextInput>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.025,
          }}>
          Model:
        </Text>
        <TextInput
          placeholder="Etios"
          placeholderTextColor="#000"
          fontSize={width * 0.035}
          marginTop={height * 0.01}
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: width * 0.02,
          }}></TextInput>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.025,
          }}>
          Year:
        </Text>
        <TextInput
          placeholder="2018"
          placeholderTextColor="#000"
          fontSize={width * 0.035}
          marginTop={height * 0.01}
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: width * 0.02,
          }}></TextInput>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.025,
          }}>
          Color:
        </Text>
        <TextInput
          placeholder="Silver Grey"
          placeholderTextColor="#000"
          fontSize={width * 0.035}
          marginTop={height * 0.01}
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: width * 0.02,
          }}></TextInput>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.025,
          }}>
          Booking Type:
        </Text>
        <TextInput
          placeholder="Taxi - Economy 6 seat"
          placeholderTextColor="#000"
          fontSize={width * 0.035}
          marginTop={height * 0.01}
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: width * 0.02,
          }}></TextInput>
      </View>
    </SafeAreaView>
  );
};
export default VehcilemanagementScreen;

const styles = StyleSheet.create({});
