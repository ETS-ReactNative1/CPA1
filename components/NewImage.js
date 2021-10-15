import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewImage() {
  // const [image, setImage] = useState(null);
  const [profileInfo, setProfileInfo] = useState({image: null })
  // const [profileName, setProfileName] = useState(null)
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {{ getImageData(),
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }}, []);



const getImageData  = async () =>{
    try {
        const jsonValue = await AsyncStorage.getItem('@imageDetails')
        let data = null
        if (jsonValue!= null){
            data = JSON.parse(jsonValue)
            setProfileInfo(data)
            // setProfileName(data.name)
            setProfileImage(data.image)
            console.log(data)
            console.log("extracting earlier information from the new Image code")
            // console.log(profileName+"While extracting older information")
        } else {
            setProfileInfo({})
            setProfileImage(null)
        }
    } catch(e) {
        console.log("error in getData ")
        console.dir(e)
      }
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@imageDetails', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
    //   setImage(result.uri);
      setProfileImage(result.uri);
      setProfileName(profileName)
      console.log("From the image picker code. Your name is"+profileName)
      const newProfileInfo = {profileName:profileName,profileImage:result.uri}
      setProfileInfo(newProfileInfo)
      storeData(newProfileInfo)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {/* {image && <Image source={{ uri: image }} style={{ width: 500, height: 500 }} />} */}

    </View>
  );
}