import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View, Button, Switch, Linking, Image, TextInput} from 'react-native';


const MainPage = () =>{
    const navigation = useNavigation();
    const [uniName,setUniName] = useState(' Your University');
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image style={{width: 100, height: 100}} source={require('../assets/favicon.png')}  />
                <Text style={styles.headerText}> 
                    AskAlumni
                </Text>
                <Text style={styles.headerText}> 
                    You have Burning Questions? 🔥
                </Text>
                <Text style={styles.headerText}> 
                    We have the right people
                </Text>
                    
            </View>
            <View style = {styles.valuePropositionsContainer}>
                <View style={styles.singleValueProp}>
                    <Text style = {styles.valuePropositionsText}>
                        1. Get Industry Relevant Tips
                    </Text>
                </View>
                <View style={styles.singleValueProp}>
                    <Text style = {styles.valuePropositionsText}>
                        2. Discuss about vital skills
                    </Text>
                    <View style={styles.secondaryTextContainer}>
                        <Text style={styles.secondaryText}>
                            What courses should you be taking?
                        </Text>
                    </View>
                </View>
                <View style={styles.singleValueProp}>
                    <Text style = {styles.valuePropositionsText}>
                        3. Synchronous Chat
                    </Text>
                    <View style={styles.secondaryTextContainer}>
                        <Text style={styles.secondaryText}>
                            Get answers instantly
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.ctaContainer}>
                <Text style={styles.topTextInput}>
                    Enter Your University:
                </Text>
                <TextInput style={styles.placeholder} placeholder='University Name' textAlign='right' placeholderTextColor="red" onChangeText={text=>{setUniName(text)}} />
                <Button title={`Contact Alumni from ${uniName} Today!` }
                        onPress={() => navigation.navigate('Online Alumni')}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        // flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'crimson',
        overflow: 'visible',
    },
    header:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'50px',
    },
    headerText:{
        color:'white',
        fontSize:64,
        textAlign:'center',
    },
    valuePropositionsContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%', 
    },
    singleValueProp:{
        flex:1,
        // flexWrap:'wrap',
        margin:15,
        alignContent:'center',
        justifyContent:'center',
    },
    valuePropositionsText:{
        color: 'black',
        fontSize:48,
        textAlign:'center',
    },
    secondaryTextContainer:{
        flex:1,
        // flexWrap:'wrap',
        marginTop:2,
        marginBottom:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryText:{
        color: 'white',
        fontSize:24,
        textAlign:'center',
    },
    ctaContainer:{
        flex:1,
        margin:' 15pt',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder:{
        // borderWidth:'5pt',
        borderColor:'orange',
        backgroundColor: 'white',
    },
    topTextInput:{
        color: 'pink',
        fontSize:32,
    },
});

export default MainPage;