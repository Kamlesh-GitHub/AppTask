import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {color} from 'react-native-reanimated';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('window');
const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <Image
          source={require('../Assests/walletlogo.png')}
          style={styles.walletimage}
          resizeMode="contain"></Image>
        <Image
          source={require('../Assests/addcardlogo.png')}
          style={styles.cardimage}
          resizeMode="contain"></Image>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <View style={{justifyContent: 'center'}}>
              <Image
                source={require('../Assests/balancelogo.png')}
                resizeMode="contain"
                style={styles.balanceimage}></Image>
            </View>

            <View style={{justifyContent: 'center', marginLeft: 15}}>
              <Text style={styles.balancetext}>Available balance :</Text>

              <Text style={styles.dollartext}> $ 6589.57</Text>
            </View>
          </View>
          <View style={styles.container4}>
            <View style={{justifyContent: 'center', marginLeft: width * 0.02}}>
              <Image
                source={require('../Assests/balancelogo.png')}
                resizeMode="contain"
                style={styles.balanceimage}></Image>
            </View>

            <View style={{justifyContent: 'center', marginLeft: width * 0.02}}>
              <Text style={styles.balancetext}>Today:</Text>

              <Text style={styles.dollartext}> $ 95.7</Text>
            </View>
          </View>
        </View>
        <View style={styles.debitcardview}>
          <Image
            source={require('../Assests/atmcardlogo.png')}
            resizeMode="contain"
            style={{marginLeft: width * 0.02}}
          />
          <Text
            style={{
              marginLeft: width * 0.02,
              fontSize: width * 0.03,
              color: 'grey',
            }}>
            Debit Card
          </Text>
          <Text style={{marginLeft: width * 0.5}}> $ 25.66</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.04,
            height: height * 0.04,
            flexDirection: 'row',
          }}>
          <Icons
            name="cash-multiple"
            size={20}
            color="#5CCCD0"
            style={{marginLeft: width * 0.04}}
          />
          <Text
            style={{
              fontSize: width * 0.038,
              color: '#000',
              marginLeft: width * 0.04,
            }}>
            Cash
          </Text>
          <Text
            style={{
              fontSize: width * 0.038,
              color: '#000',
              fontWeight: 'bold',
              marginLeft: width * 0.4,
            }}>
            $709.57
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.04,
            height: height * 0.04,
            flexDirection: 'row',
          }}>
          <Icons
            name="credit-card-outline"
            size={20}
            color="#5CCCD0"
            style={{marginLeft: width * 0.04}}
          />

          <Text
            style={{
              fontSize: width * 0.038,
              color: '#000',
              marginLeft: width * 0.04,
            }}>
            Card balance
          </Text>
          <Text
            style={{
              fontSize: width * 0.038,
              color: '#000',
              fontWeight: 'bold',
              marginLeft: width * 0.28,
            }}>
            $5689.75
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginTop: height * 0.04,
            height: height * 0.04,
            flexDirection: 'row',
          }}>
          <Icons
            name="cash-usd-outline"
            size={20}
            color="#5CCCD0"
            style={{marginLeft: width * 0.04}}
          />

          <Text
            style={{
              fontSize: width * 0.038,
              color: '#000',
              marginLeft: width * 0.04,
            }}>
            Net worth
          </Text>
          <Text
            style={{
              fontSize: width * 0.038,
              color: '#000',
              fontWeight: 'bold',
              marginLeft: width * 0.35,
            }}>
            $6985.75
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: height * 0.01,
  },
  walletimage: {
    width: width * 0.5,
    height: height * 0.2,
    alignSelf: 'center',
  },
  cardimage: {
    width: width * 0.4,
    height: height * 0.04,
    alignSelf: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.02,
  },
  container3: {
    width: width * 0.4,
    height: height * 0.06,
    backgroundColor: '#5CCCD0',
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container4: {
    width: width * 0.4,
    height: height * 0.06,
    backgroundColor: '#31A4A9',
    borderRadius: 8,
    flexDirection: 'row',
  },
  balancetext: {
    fontSize: width * 0.025,
    color: '#fff',
  },
  dollartext: {
    fontSize: width * 0.035,
    color: '#fff',
    fontWeight: 'bold',
  },
  balanceimage: {
    width: width * 0.09,
  },
  debitcardview: {
    width: width * 0.95,
    height: height * 0.06,
    backgroundColor: '#EDF9F8',
    borderRadius: 8,
    flexDirection: 'row',
    marginTop: height * 0.03,
    alignItems: 'center',
  },
});
