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
  TouchableOpacity,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {BottomSheet} from 'react-native-btr';

const {height, width} = Dimensions.get('window');

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: width * 0.04,
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
                padding: width * 0.04,
              }}>
              <View
                style={{
                  width: width * 0.9,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  height: height * 0.08,
                  backgroundColor: '#FFF',
                  alignItems: 'center',
                }}>
                <Rating
                  type="star"
                  ratingCount={5}
                  imageSize={40}
                  style={{marginTop: 1}}
                />
              </View>
              <Text
                style={{
                  fontSize: width * 0.04,
                  fontWeight: 'bold',
                  marginTop: height * 0.06,
                  textAlign: 'center',
                }}>
                Rate us now
              </Text>
              <Text
                style={{
                  fontSize: width * 0.038,

                  textAlign: 'center',
                  marginTop: height * 0.02,
                }}>
                Rate us now for a customer feedback and your
              </Text>
              <Text
                style={{
                  fontSize: width * 0.038,

                  textAlign: 'center',
                }}>
                reward and promotions.
              </Text>
              <TextInput
                placeholder="The ride was so awesome and comfort"
                placeholderTextColor="grey"
                fontSize={width * 0.038}
                marginTop={height * 0.06}
                style={{
                  borderColor: '#000',
                  borderWidth: 1,
                  color: '#000',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  width: width * 0.9,
                  height: height * 0.13,
                  textAlignVertical: 'top',
                }}></TextInput>
              <TouchableOpacity
                style={{
                  width: width * 0.95,
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
                  Rate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
        <Text
          style={{
            fontSize: width * 0.07,
            color: '#000',
            textAlign: 'center',
            marginTop: height * 0.03,
            fontWeight: '600',
          }}>
          {'How was your experience \n with Mr. John Doe?'}
        </Text>
        <Image
          source={require('../Assests/ratinglogo.png')}
          resizeMode="contain"
          style={{alignSelf: 'center', height: '30%', width: '60%'}}
        />
        <Rating
          type="star"
          ratingCount={5}
          imageSize={50}
          style={{marginTop: 1}}
        />
        <Text
          style={{
            fontSize: width * 0.06,
            color: '#000',
            textAlign: 'center',
            marginTop: height * 0.04,
          }}>
          Fare - $12.57
        </Text>
        <Text
          style={{
            fontSize: width * 0.03,
            color: '#000',
            marginTop: height * 0.04,
            fontWeight: 'bold',
          }}>
          write a comment :
        </Text>
        <TextInput
          placeholder="The ride was so awesome and comfort"
          placeholderTextColor="grey"
          fontSize={width * 0.038}
          marginTop={height * 0.02}
          style={{
            borderColor: '#000',
            borderWidth: 1,
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: 10,
            width: width * 0.9,
            height: height * 0.13,
            textAlignVertical: 'top',
          }}></TextInput>
        <TouchableOpacity
          style={{
            width: width * 0.95,
            height: height * 0.065,
            backgroundColor: '#2CCFDD',
            borderRadius: 15,
            marginTop: height * 0.02,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: width * 0.05,
              textAlign: 'center',
              color: '#FFF',
            }}>
            Rate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleBottomNavigationView}>
          <Text
            style={{
              fontSize: width * 0.05,
              textAlign: 'center',
              color: '#000',
              marginTop: height * 0.01,
            }}>
            Rate Us
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: width,
    height: height / 1.7,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
