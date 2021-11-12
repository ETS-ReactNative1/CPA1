import React,{useState, useEffect,useContext} from 'react';
import { SocialIcon } from 'react-native-elements'
import {StyleSheet, Text, View, Button, Switch, Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhotoElement from './PhotoElement';
import { TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import NewImage from './NewImage';
import {useValue} from '../ValueContext';
const Settings = () =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const [edit,setEdit] = useState(false)
    const [profileInfo, setProfileInfo] = useState({name: null ,image: null})
    const [profileName, setProfileName] = useState("")
    const {currentValue,setCurrentValue} = useValue()
    const [profileImage, setProfileImage] = useState("")
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    // useEffect ( ()=>{
    //     getData(),
    //     getImageData(),
    //     setEdit(false)
    // }
    // ,[])

    useEffect(() => {{ getData(),
                       setEdit(false),
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }}, []);

    
    const getData  = async () =>{
        try {
            const jsonValue = await AsyncStorage.getItem('@profileDetails')
            let data = null
            if (jsonValue!= null){
                data = JSON.parse(jsonValue)
                setProfileInfo(data)
                setProfileName(data.name)
                setProfileImage(data.image)
                setCurrentValue({name:data.name})
                console.log(data)
                console.log("extracting earlier information")
            } else {
                setProfileInfo({})
                setProfileName(null)
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
              await AsyncStorage.setItem('@profileDetails', jsonValue)
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
        //   setProfileName(profileInfo.name)
        //   console.log("From the image picker code. Your name is"+profileName)
          const newProfileInfo = {name:profileName,image:result.uri}
          setProfileInfo(newProfileInfo)
          storeData(newProfileInfo)
        }
      };

    let editFeature = ""
    if (!edit) {
        editFeature = 
        <View style={styles.editProfileSection}>
            {/* <PhotoElement imageLink= {require('../assets/CartoonImages/Malai.jpeg')} name={profileInfo.profileName} /> */}
            {/* <PhotoElement imageLink= {profileInfo.profileImage} name={profileInfo.profileName} /> */}
            <PhotoElement imageLink= {profileInfo.image} name={profileInfo.name} />
            
            <Button title="Edit Profile" color="black" onPress={()=> setEdit(true)} />
        </View>
    } else {
        editFeature =
        <View style={styles.editProfileSection}>
            {/* Have text inputs that change the state and saves it into the local storage */}
            {/* <PhotoElement imageLink= {profileInfo.profileImage} name={profileName} /> */}
            <PhotoElement imageLink= {profileInfo.image} name={profileInfo.name} />
            
            <TextInput style={styles.textInputDesign} placeholder="New Profile Name" onChangeText ={(text)=> {setProfileName(text)}} />
            {console.log("Just saved your new profile Name: "+profileName)}
            {/* <NewImage /> */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
            </View>
            <Button title="Save Profile" color="darkgreen" onPress={()=> {setEdit(false)
                                                                         const newProfileInfo = {name:profileName, image:profileImage}
                                                                         setProfileInfo(newProfileInfo)
                                                                         setCurrentValue({name:profileName})
                                                                         storeData(newProfileInfo)}
                                                                        } 
            />

        </View>
    }
    return(
        <View style={styles.container}>
            <View >
                <Text style ={styles.headerText}>Choose your preferences:</Text>
            </View>

            <View style ={styles.settingsContainer}>
                {editFeature}
                <View style = {styles.innerSettingsContainer}>

                    <View style={styles.mainSettingsContainer}>
                        <Text style={styles.settingsText}>Only Show Online Alumni:</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    </View>

                </View>
                {/* <View style = {styles.innerSettingsContainer}> */}
                    {/* <View style={styles.mainSettingsContainer}> */}
                        {/* <Text style={styles.settingsText}>Change profile picture</Text> */}
                    {/* </View> */}
                    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
                        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
                        {/* {image && <Image source={{ uri: image }} style={{ width: 500, height: 500 }} />} */}
                    {/* </View>
                    <View style={styles.buttonContainer}> */}
                        {/* <Button color='black' title="Upload New Image " /> */}
                    {/* </View> */}

                {/* </View> */}
                
                <View style = {styles.exteriorSocialContainer}>
                    <Text style={styles.settingsText}>Connect to my socials</Text>
                        <View style={styles.socialContainer}>
                            <View style={styles.socialButtons}>
                                {/* <Button color='darkblue' title="FB" /> */}
                                <SocialIcon
                                onPress={() => Linking.openURL('https://www.facebook.com/MALAIIYYAPPAN/')}
                                dark
                                type='facebook'
                                />
                            </View>
                            <View style={styles.socialButtons}>
                                {/* <Button color = 'purple' title="Instagram" /> */}
                                <SocialIcon
                                // button
                                // light
                                onPress={() => Linking.openURL('https://www.instagram.com/itzmalaife/')}
                                type='instagram'
                                />
                            </View>
                            <View style={styles.socialButtons}>
                                {/* <Button color='lightblue' title="Linkedin" /> */}
                                <SocialIcon
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/muthhukumar-malaiiyyappan-89aba054')}
                                type='linkedin'
                                />

                            </View>
                        </View>

                </View>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: '#ddd',
        alignItems: 'stretch',
        // justifyContent: 'flex-start',
        // padding: 5,
        // borderWidth: '2pt',
        // borderColor:'pink',
      },
    headerText:{
        fontSize: 64,
        color: 'black',
    },
    settingsContainer:{
        flex:5,
        backgroundColor:'white',

    },
    innerSettingsContainer:{
        flex:0.5,
        flexDirection:'row',
        backgroundColor: 'pink',
        justifyContent:'center',
    },
    settingsText:{
        fontSize: 24,
        color: 'white',
    },
    exteriorSocialContainer:{
        flex:1,
        // flexDirection:'row',
        backgroundColor: 'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    socialContainer:{
        flex:1,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent:'center'
    },
    mainSettingsContainer:{
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialButtons:{
        flex:0.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // margin: '100pt',
        margin: 25
    },
    editProfileSection:{
        flex:2,
        padding:5,
        alignItems:'center',
        justifyContent:"center",
    },
    textInputDesign:{
        borderWidth:5,
        borderColor:'orange',
        backgroundColor: 'white',
        textAlign: 'center'
    },

});


export default Settings;