import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'


const OnlineStatus = (props) =>{
    let isOnline = ""
    // if ({props.online} == true) {
    // function isOnline 
    if (props.online == true) {
        isOnline = 
        <View style={styles.container}>
            <Text>Online   </Text>
            <Badge status="success" />
        </View>
    } else {
        isOnline = 
        <View style={styles.container}>

            <Text>Offline    </Text>
            <Badge status="error" />
        </View>
    }
    // let isOnline = 
    // <View style={styles.container}>

    //     <Text>Offline    </Text>
    //     <Badge status="error" />
    // </View>
    // let isOffline = 
    // <View style={styles.container}>

    //     <Text>Offline    </Text>
    //     <Badge status="error" />
    // </View>
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
