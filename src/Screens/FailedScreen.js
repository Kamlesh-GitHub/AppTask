import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
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
                <Icon name="close-circle" size={70} color="#EA2A2A" />
                <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 20}}>
                  Booking Failed !
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '500',
                    marginTop: 20,
                  }}>
                  Success !
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  Your booking is confirmed, please chat with
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  customer for ride and travel.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#2CCFDD',
                  width: '50%',
                  height: 45,
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginTop: 30,
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
    padding: 16,
  },
  buttonStyle: {
    minWidth: '50%',
    padding: 10,
    backgroundColor: '#f5821f',
    margin: 15,
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
