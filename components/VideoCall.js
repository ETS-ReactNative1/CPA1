import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DailyIframe from '@daily-co/daily-js';
// let callFrame = DailyIframe.createFrame();

// let callFrame = DailyIframe.wrap(MY_IFRAME);



const VideoCall = () =>{


    let callFrame = DailyIframe.createFrame({
        showLeaveButton: true,
        iframeStyle: {
          position: 'fixed',
          border: 0,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      });
    callFrame.join({ url: 'https://dialme.daily.co/uSvfkI0giyynCgK99JOF' });
    
    return(
        <View style={styles.container}>
            {callFrame}
        </View>
    )
}

export default VideoCall;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'stretch',
      // justifyContent: 'center',
    },
  });