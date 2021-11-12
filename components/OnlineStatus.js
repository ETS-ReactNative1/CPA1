import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const OnlineStatus = (props) =>{
    let isOnline = ""
    // if ({props.online} == true) {
    // function isOnline 
    if (props.online == "success") {
        isOnline = 
        <View>

            <View style={styles.container}>
                <Text>Online   </Text>
            </View>
        </View>

    } else {
        isOnline = 
        <View style={styles.container}>

            <Text>Offline    </Text>
        </View>
    }

    return(
        
        <View>
            {/* {props.online ? isOnline: isOffline} */}
            {isOnline}
        </View>
    )


};


const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        // borderWidth: '2pt',
        // borderColor:'red',
    }
})

export default OnlineStatus;
