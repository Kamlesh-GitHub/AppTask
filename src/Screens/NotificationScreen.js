import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
const App = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          paddingHorizontal: width * 0.04,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <Text style={styles.markreadtext}>Mark all as read</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.02,
            height: height * 0.07,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assests/settinglogo.png')}
            resizeMode="contain"
            style={{marginLeft: width * 0.03, height: height * 0.06}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: width * 0.033,
                color: 'grey',
                marginLeft: width * 0.035,
              }}>
              Reward Received
            </Text>
            <Text
              style={{
                fontSize: width * 0.033,
                color: '#000',
                marginLeft: width * 0.035,
              }}>
              Reward Credited in your account successfully...
            </Text>
          </View>
          <Text
            style={{
              fontSize: width * 0.02,
              color: 'grey',
              fontWeight: 'bold',
            }}>
            57 min ago
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.02,
            height: height * 0.07,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assests/settinglogo.png')}
            resizeMode="contain"
            style={{marginLeft: width * 0.03, height: height * 0.06}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: width * 0.033,
                color: 'grey',
                marginLeft: width * 0.035,
              }}>
              Invite Friends
            </Text>
            <Text
              style={{
                fontSize: width * 0.033,
                color: '#000',
                marginLeft: width * 0.035,
              }}>
              Reward Credited in your account successfully...
            </Text>
          </View>
          <Text
            style={{
              fontSize: width * 0.02,
              color: 'grey',
              fontWeight: 'bold',
            }}>
            1 day ago
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.02,
            height: height * 0.07,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assests/settinglogo.png')}
            resizeMode="contain"
            style={{marginLeft: width * 0.03, height: height * 0.06}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: width * 0.033,
                color: 'grey',
                marginLeft: width * 0.035,
              }}>
              Promotions
            </Text>
            <Text
              style={{
                fontSize: width * 0.033,
                color: '#000',
                marginLeft: width * 0.035,
              }}>
              Reward Credited in your account successfully...
            </Text>
          </View>
          <Text
            style={{
              fontSize: width * 0.02,
              color: 'grey',
              fontWeight: 'bold',
            }}>
            2 days ago
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.02,
            height: height * 0.07,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assests/settinglogo.png')}
            resizeMode="contain"
            style={{marginLeft: width * 0.03, height: height * 0.06}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: width * 0.033,
                color: 'grey',
                marginLeft: width * 0.035,
              }}>
              Reward Received
            </Text>
            <Text
              style={{
                fontSize: width * 0.033,
                color: '#000',
                marginLeft: width * 0.035,
              }}>
              Reward Credited in your account successfully...
            </Text>
          </View>
          <Text
            style={{
              fontSize: width * 0.02,
              color: 'grey',
              fontWeight: 'bold',
            }}>
            1 week ago
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.02,
            height: height * 0.07,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assests/settinglogo.png')}
            resizeMode="contain"
            style={{marginLeft: width * 0.03, height: height * 0.06}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: width * 0.033,
                color: 'grey',
                marginLeft: width * 0.035,
              }}>
              Cahback Offers 20%
            </Text>
            <Text
              style={{
                fontSize: width * 0.033,
                color: '#000',
                marginLeft: width * 0.035,
              }}>
              Reward Credited in your account successfully...
            </Text>
          </View>
          <Text
            style={{
              fontSize: width * 0.02,
              color: 'grey',
              fontWeight: 'bold',
            }}>
            2 weeks ago
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.02,
            height: height * 0.07,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Assests/settinglogo.png')}
            resizeMode="contain"
            style={{marginLeft: width * 0.03, height: height * 0.06}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: width * 0.033,
                color: 'grey',
                marginLeft: width * 0.035,
              }}>
              Reward Received
            </Text>
            <Text
              style={{
                fontSize: width * 0.033,
                color: '#000',
                marginLeft: width * 0.035,
              }}>
              Reward Credited in your account successfully...
            </Text>
          </View>
          <Text
            style={{
              fontSize: width * 0.02,
              color: 'grey',
              fontWeight: 'bold',
            }}>
            57 min ago
          </Text>
        </View>
        <Image
          style={styles.signimage}
          source={require('../Assests/notificationlogo.png')}
          resizeMode="contain"
          style={{
            width: width * 0.4,
            height: height * 0.3,
            alignSelf: 'center',
            opacity: 0.4,
          }}></Image>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  markreadtext: {
    fontSize: width * 0.03,
    color: '#2CCFDD',
    marginTop: height * 0.02,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
});
