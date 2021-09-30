import React,{useState} from 'react';
import { SocialIcon } from 'react-native-elements'
import {StyleSheet, Text, View, Button, Switch, Linking} from 'react-native';


const Settings = () =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.container}>
            <View >
                <Text style ={styles.headerText}>Choose your preferences:</Text>
            </View>
            <View style ={styles.settingsContainer}>
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
                <View style = {styles.innerSettingsContainer}>
                    <View style={styles.mainSettingsContainer}>
                        <Text style={styles.settingsText}>Change profile picture</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button color='black' title="Upload New Image " />
                    </View>

                </View>
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
    }

});


export default Settings;