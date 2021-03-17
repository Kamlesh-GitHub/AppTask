import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {BottomSheet} from 'react-native-btr';

const {height, width} = Dimensions.get('window');
const EditprofileScreen = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: width * 0.03,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                padding: width * 0.03,
              }}>
              <Text
                style={{
                  textAlign: 'center',

                  fontSize: width * 0.04,
                  fontWeight: 'bold',
                }}>
                Select your media source
              </Text>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  textAlign: 'center',
                  marginTop: height * 0.01,
                }}>
                File should be in JPG,PNG
              </Text>
              <View
                style={{
                  width: width * 0.95,
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                  height: height * 0.08,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../Assests/camera.png')}
                  resizeMode="contain"
                  style={{
                    height: height * 0.15,
                    width: width * 0.04,
                    marginLeft: width * 0.3,
                  }}
                />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: width * 0.04,
                      color: '#2CCFDD',
                      textAlign: 'center',
                      marginTop: height * 0.025,
                      marginLeft: width * 0.04,
                    }}>
                    Camera
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: width * 0.2,
                  height: height * 0.05,
                  alignSelf: 'center',
                  color: '#2CCFDD',
                  textAlign: 'center',
                }}>
                <Text
                  style={{
                    fontSize: width * 0.04,
                    color: '#2CCFDD',
                    textAlign: 'center',
                    marginTop: height * 0.015,
                  }}>
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={{
            borderRadius: 100,

            height: height * 0.24,
            width: width * 0.45,
            alignSelf: 'center',
          }}>
          <Image
            source={require('../Assests/profilelogo2.png')}
            resizeMode="contain"
            style={{
              height: height * 0.24,
              width: width * 0.48,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.03,
          }}>
          Username:
        </Text>
        <TextInput
          placeholder="John Joe"
          placeholderTextColor="grey"
          fontSize={14}
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            color: 'grey',
          }}></TextInput>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.03,
          }}>
          Email:
        </Text>
        <TextInput
          placeholder="abcdemo@gmail.com"
          placeholderTextColor="grey"
          fontSize={14}
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            color: 'grey',
          }}></TextInput>
        <Text
          style={{
            fontSize: width * 0.03,
            color: 'grey',
            marginTop: height * 0.03,
          }}>
          Password:
        </Text>
        <TextInput
          placeholder=""
          placeholderTextColor="grey"
          fontSize={14}
          secureTextEntry={true}
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            color: 'grey',
          }}></TextInput>
      </View>
    </SafeAreaView>
  );
};
export default EditprofileScreen;

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: width * 1.0,
    height: height * 0.25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
