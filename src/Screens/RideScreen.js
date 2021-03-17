import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: width, height: height}}>
        <StatusBar translucent={true}></StatusBar>
        <MapView
          style={{height: height, width: width}}
          initialRegion={{
            latitude: 22.7196,
            longitude: 75.8577,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>

        <View
          style={{
            position: 'absolute',
            backgroundColor: '#FFF',
            alignSelf: 'center',
            borderRadius: 15,
            width: width * 0.95,
            padding: width * 0.02,
            height: height * 0.3,
            bottom: height * 0.1,
            borderWidth: 1,
            borderColor: 'grey',
          }}>
          <Text
            style={{
              fontSize: width * 0.025,
              color: '#000',
              marginLeft: width * 0.02,
            }}>
            250+ rides
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assests/driverimage.png')}
              resizeMode="contain"
              style={{
                height: height * 0.05,
                width: width * 0.15,
                marginTop: height * 0.01,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginTop: height * 0.01,
                marginLeft: width * 0.02,
              }}>
              <Text
                style={{
                  fontSize: width * 0.035,
                  color: '#000',
                  marginLeft: 5,
                  fontWeight: '900',
                }}>
                Miss. Ahana Edson
              </Text>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#2CCFDD',
                  marginLeft: 5,
                  fontWeight: '900',
                }}>
                My past trips
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: height * 0.015,
                marginLeft: width * 0.2,
              }}>
              <Text
                style={{
                  fontSize: width * 0.025,
                  color: '#000',
                  marginLeft: 5,
                  fontWeight: 'bold',
                }}>
                Total Earned
              </Text>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  marginLeft: 5,
                  fontWeight: '900',
                }}>
                $599.56
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#2CCFDD',
              alignSelf: 'center',
              borderRadius: 15,
              width: width * 0.9,
              padding: width * 0.04,
              height: height * 0.14,
              marginTop: height * 0.05,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Icons name="clock-outline" size={25} color="#FFF" />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                    marginTop: 5,
                  }}>
                  10.2
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    marginTop: 5,
                  }}>
                  Hours Online
                </Text>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Icons name="speedometer" size={25} color="#FFF" />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                    marginTop: 5,
                  }}>
                  4.7
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    marginTop: 5,
                  }}>
                  Total Distance
                </Text>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Icons name="clipboard-list-outline" size={25} color="#FFF" />

                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                    marginTop: 5,
                  }}>
                  15%
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    marginTop: 5,
                  }}>
                  Total Jobs
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
