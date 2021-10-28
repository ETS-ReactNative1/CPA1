import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const PhotoElement = (props) =>{
    return (
        <View style={styles.container}>
            <Image style={{width: 100, height: 100}} source={{uri: props.imageLink}} />
            <Text>Hello,{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default PhotoElement;