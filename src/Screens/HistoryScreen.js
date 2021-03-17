import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: '#fff',
          paddingHorizontal: width * 0.03,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: height * 0.02,
          }}>
          <View
            style={{
              width: width * 0.4,
              height: height * 0.08,
              backgroundColor: '#5CCCD0',
              borderRadius: 8,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Image
                source={require('../Assests/taxilogo.png')}
                resizeMode="contain"
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                }}></Image>
            </View>

            <View style={{justifyContent: 'center', marginLeft: width * 0.02}}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#fff',
                }}>
                Total Jobs
              </Text>

              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                32
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width * 0.4,
              height: height * 0.08,
              backgroundColor: '#31A4A9',
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <View style={{justifyContent: 'center', marginLeft: width * 0.04}}>
              <Image
                source={require('../Assests/dollarlogo.png')}
                resizeMode="contain"
                style={{
                  width: width * 0.08,
                  height: height * 0.06,
                }}></Image>
            </View>

            <View style={{justifyContent: 'center', marginLeft: width * 0.04}}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#fff',
                }}>
                Earned
              </Text>

              <Text
                style={{
                  fontSize: width * 0.04,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                $968.47
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            alignSelf: 'center',
            borderRadius: 15,
            width: width * 0.95,
            marginTop: height * 0.02,
            height: height * 0.2,

            borderWidth: 1,
            borderColor: 'grey',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              flexDirection: 'row',
              height: height * 0.08,
            }}>
            <Image
              source={require('../Assests/picture.png')}
              resizeMode="contain"
              style={{
                width: width * 0.08,
                height: height * 0.08,
                marginLeft: width * 0.05,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginTop: height * 0.01,
                marginLeft: width * 0.03,
              }}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                Mr.John Doe
              </Text>
              <Text
                style={{
                  fontSize: width * 0.025,
                  color: '#000',
                }}>
                Payment type: Cash
              </Text>
              <Text
                style={{
                  fontSize: width * 0.025,
                  color: '#000',
                }}>
                Promocode applied:
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: width * 0.03,
                left: width * 0.3,
              }}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                $ 13.50
              </Text>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#2CCFDD',
                  alignSelf: 'center',
                }}>
                2,5 Km
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              alignSelf: 'center',

              width: width * 0.8,
              height: height * 0.06,
              borderBottomColor: `#dcdcdc`,
              borderBottomWidth: 4,
            }}>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginTop: height * 0.005,
                marginLeft: width * 0.005,
              }}>
              Current locations
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: '#000',
                marginLeft: width * 0.005,
              }}>
              New Palasiya Ext, 452005
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginTop: height * 0.015,
                marginLeft: width * 0.005,
              }}>
              Drop locations
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: '#000',
                marginLeft: width * 0.005,
              }}>
              Vijay Nagar squ. Ext, 452005
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            alignSelf: 'center',
            borderRadius: 15,
            width: width * 0.95,
            marginTop: height * 0.02,
            height: height * 0.2,

            borderWidth: 1,
            borderColor: 'grey',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              flexDirection: 'row',
              height: height * 0.08,
            }}>
            <Image
              source={require('../Assests/picture.png')}
              resizeMode="contain"
              style={{
                width: width * 0.08,
                height: height * 0.08,
                marginLeft: width * 0.05,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginTop: height * 0.01,
                marginLeft: width * 0.03,
              }}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                Mr.John Doe
              </Text>
              <Text
                style={{
                  fontSize: width * 0.025,
                  color: '#000',
                }}>
                Payment type: Cash
              </Text>
              <Text
                style={{
                  fontSize: width * 0.025,
                  color: '#000',
                }}>
                Promocode applied:
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: width * 0.03,
                left: width * 0.3,
              }}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                $ 13.50
              </Text>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#2CCFDD',
                  alignSelf: 'center',
                }}>
                2,5 Km
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              alignSelf: 'center',

              width: width * 0.8,
              height: height * 0.06,
              borderBottomColor: `#dcdcdc`,
              borderBottomWidth: 4,
            }}>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginTop: height * 0.005,
                marginLeft: width * 0.005,
              }}>
              Current locations
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: '#000',
                marginLeft: width * 0.005,
              }}>
              New Palasiya Ext, 452005
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginTop: height * 0.015,
                marginLeft: width * 0.005,
              }}>
              Drop locations
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: '#000',
                marginLeft: width * 0.005,
              }}>
              Vijay Nagar squ. Ext, 452005
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            alignSelf: 'center',
            borderRadius: 15,
            width: width * 0.95,
            marginTop: height * 0.02,
            height: height * 0.2,

            borderWidth: 1,
            borderColor: 'grey',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              flexDirection: 'row',
              height: height * 0.08,
            }}>
            <Image
              source={require('../Assests/picture.png')}
              resizeMode="contain"
              style={{
                width: width * 0.08,
                height: height * 0.08,
                marginLeft: width * 0.05,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginTop: height * 0.01,
                marginLeft: width * 0.03,
              }}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                Mr.John Doe
              </Text>
              <Text
                style={{
                  fontSize: width * 0.025,
                  color: '#000',
                }}>
                Payment type: Cash
              </Text>
              <Text
                style={{
                  fontSize: width * 0.025,
                  color: '#000',
                }}>
                Promocode applied:
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: width * 0.03,
                left: width * 0.3,
              }}>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                $ 13.50
              </Text>
              <Text
                style={{
                  fontSize: width * 0.03,
                  color: '#2CCFDD',
                  alignSelf: 'center',
                }}>
                2,5 Km
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              alignSelf: 'center',

              width: width * 0.8,
              height: height * 0.06,
              borderBottomColor: `#dcdcdc`,
              borderBottomWidth: 4,
            }}>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginTop: height * 0.005,
                marginLeft: width * 0.005,
              }}>
              Current locations
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: '#000',
                marginLeft: width * 0.005,
              }}>
              New Palasiya Ext, 452005
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: 'grey',
                marginTop: height * 0.015,
                marginLeft: width * 0.005,
              }}>
              Drop locations
            </Text>
            <Text
              style={{
                fontSize: width * 0.03,
                color: '#000',
                marginLeft: width * 0.005,
              }}>
              Vijay Nagar squ. Ext, 452005
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
