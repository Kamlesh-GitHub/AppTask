import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  ScaleAnimation,
} from 'react-native-popup-dialog';
const {height, width} = Dimensions.get('window');

const App = () => {
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setScaleAnimationDialog(true)}>
          <Text style={styles.buttonTextStyle}>Press here</Text>
        </TouchableHighlight>

        <Dialog
          onTouchOutside={() => {
            setScaleAnimationDialog(false);
          }}
          width={0.95}
          visible={scaleAnimationDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            setScaleAnimationDialog(false);
            console.log('onHardwareBackPress');
            return true;
          }}
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                setScaleAnimationDialog(false);
              }}
              key="button-1"
            />,
          ]}>
          <DialogContent>
            <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
              <View style={{alignItems: 'center'}}>
                <Icon
                  name="checkmark-circle"
                  size={height * 0.08}
                  color="#2CCFDD"
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: width * 0.05,
                    marginTop: height * 0.03,
                  }}>
                  Booking Confirmed !
                </Text>
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: '500',
                    marginTop: height * 0.03,
                  }}>
                  Success !
                </Text>
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: '500',
                  }}>
                  Your booking is confirmed, please chat with
                </Text>
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: '500',
                  }}>
                  customer for ride and travel.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#2CCFDD',
                  width: width / 2,
                  height: height * 0.06,
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginTop: height * 0.04,
                }}
                onPress={() => {
                  setScaleAnimationDialog(false);
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#FFF',
                  }}>
                  Okay
                </Text>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    padding: width * 0.04,
  },
  buttonStyle: {
    minWidth: width / 2,
    padding: width * 0.04,
    backgroundColor: '#f5821f',

    borderRadius: 20,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
