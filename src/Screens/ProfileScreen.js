import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', padding: width * 0.03}}>
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <View
          style={{
            marginTop: height * 0.02,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              height: height * 0.08,

              width: width * 0.15,

              justifyContent: 'center',
              borderRadius: 7,
              backgroundColor: '#2CCFDD',
            }}>
            <Image
              source={require('../Assests/layer.png')}
              resizeMode="contain"
              style={{
                height: height * 0.02,
                width: width * 0.08,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'column', marginTop: height * 0.01}}>
            <Text
              style={{
                fontSize: width * 0.04,
                color: '#000',
                marginLeft: width * 0.03,
              }}>
              Settings
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginLeft: width * 0.03,
                fontWeight: '800',
              }}>
              Edit and manage your controls
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: height * 0.05,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assests/profilelogo.png')}
            resizeMode="contain"
            style={{
              height: height * 0.15,
              width: width * 0.3,
              alignSelf: 'flex-start',
            }}
          />

          <View style={{flexDirection: 'column', marginTop: height * 0.01}}>
            <Text
              style={{
                fontSize: width * 0.04,
                color: '#000',
                marginLeft: width * 0.03,
                fontWeight: 'bold',
              }}>
              John Doe
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginLeft: 15,
                fontWeight: '800',
              }}>
              abcdemail@gmail.com
            </Text>

            <ImageBackground
              source={require('../Assests/editprofile.png')}
              resizeMode="contain"
              style={{
                height: height * 0.04,
                width: width * 0.3,
                alignSelf: 'center',
                marginTop: height * 0.02,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditprofileScreen')}>
                <Text
                  style={{
                    fontSize: width * 0.03,
                    color: 'grey',
                  }}>
                  Edit profile
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            height: height * 0.25,
            backgroundColor: '#f2f2f2',
            marginTop: height * 0.02,
            paddingHorizontal: width * 0.05,
            borderRadius: 15,
          }}>
          <TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: '#000',
                height: height * 0.06,
              }}>
              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#000',
                  marginTop: height * 0.02,
                  fontWeight: 'bold',
                }}>
                Offline mode
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('VehcilemanagementScreen')}>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: '#000',
                height: height * 0.06,
              }}>
              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#000',
                  marginTop: height * 0.02,
                  fontWeight: 'bold',
                }}>
                Vehicle management
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: '#000',
                height: height * 0.06,
              }}>
              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#000',
                  marginTop: height * 0.02,
                  fontWeight: 'bold',
                }}>
                Language
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationScreen')}>
            <View
              style={{
                height: height * 0.06,
              }}>
              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#000',
                  marginTop: height * 0.02,
                  fontWeight: 'bold',
                }}>
                Notifications
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: height * 0.03,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              height: height * 0.08,

              width: width * 0.15,
              backgroundColor: 'red',
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: '#2CCFDD',
            }}>
            <Image
              source={require('../Assests/layer2.png')}
              resizeMode="contain"
              style={{
                height: height * 0.03,
                width: width * 0.1,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'column', marginTop: height * 0.003}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: width * 0.05,
                  color: 'blue',
                  marginLeft: width * 0.03,
                  textDecorationLine: 'underline',
                }}>
                Help and Feedback
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: width * 0.035,
                color: 'grey',
                marginLeft: width * 0.03,
                fontWeight: '800',
                marginTop: height * 0.003,
              }}>
              Reach us with your feed and questions
            </Text>
          </View>
        </View>
        <View
          style={{
            height: height * 0.13,
            backgroundColor: '#f2f2f2',
            marginTop: height * 0.03,
            paddingHorizontal: height * 0.03,
            borderRadius: 15,
          }}>
          <TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: 'black',
                height: height * 0.06,
              }}>
              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#000',
                  marginTop: height * 0.015,
                  fontWeight: 'bold',
                }}>
                FAQ and Videos
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactusScreen')}>
            <View
              style={{
                height: height * 0.5,
              }}>
              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#000',
                  marginTop: height * 0.015,
                  fontWeight: 'bold',
                }}>
                Contact Us
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
