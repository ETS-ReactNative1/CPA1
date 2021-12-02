import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button} from 'react-native';
import DailyIframe from '@daily-co/daily-js';

// let callFrame = DailyIframe.createFrame();

// let callFrame = DailyIframe.wrap(MY_IFRAME);
// import Daily from '@daily-co/react-native-daily-js';




const DailyFrame = () =>{

    // const navigation = useNavigation();

    // Start joining a call
    // const call = Daily.createCallObject();
    // call.join({ url: 'https://dialme.daily.co/uSvfkI0giyynCgK99JOF' });

    let callFrame = DailyIframe.createFrame({
        showLeaveButton: true, //What happens when someone clicks the leave button
        // redirect_on_meeting_exit : navigation.navigate('Main Page'),
        iframeStyle: {
          position: 'fixed',
          border: 0,
          top: 25,
          left: 25,
          width: '100%',
          height: '100%',
        },
      });
    let callFrameContainer= callFrame.join({ url: 'https://dialme.daily.co/uSvfkI0giyynCgK99JOF' });
    return(
        <View style={styles.container}>
          {/* <Button title={`Return To Main Page` }
          onPress={() => navigation.navigate('Main Page')}/> */}
          <View>
            {callFrameContainer}
          </View>   
 
        </View>
    )
}

export default DailyFrame;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
    },
  });