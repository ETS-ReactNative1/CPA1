import React, {useState, useEffect,useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {useValue} from '../ValueContext';
import {Picker} from '@react-native-picker/picker';




const ProfilePage = ()=>{
    const [selectedDate, setSelectedDate] = useState("none");
    const [dateChoosen,setDateChoosen] =useState(false)
    const [selectedTime,setSelectedTime] =useState();
    const [timeChoosen,setTimeChoosen] =useState(false);
    const timePicker = 
        <View style={{}}>
            <View style={{ alignItems: 'center'}}>
                <Text>Available Timings for {selectedDate}</Text>
            </View>
            <Picker
                selectedValue={selectedDate}
                onValueChange={(itemValue, itemIndex) =>
                {   setSelectedTime(itemValue)
                    setTimeChoosen(true)}
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="8.00PM" value="8.00PM" />
                <Picker.Item label="9.15PM" value="9.15PM" />
            </Picker>
            {timeChoosen ?<Text> You have choosen :{selectedDate} at {selectedTime} </Text>:<View /> }
            <View style={{padding:2}}>
                <Button title="Select Timing" />
            </View>
        </View>
    return(
        <View>
            <View style={{ alignItems: 'center'}}>
                <Text>Available Date</Text>
            </View>

            <Picker
                selectedValue={selectedDate}
                onValueChange={(itemValue, itemIndex) =>
                {   setSelectedDate(itemValue)
                    setDateChoosen(true)}
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="12/01/2021" value="12/01/2021" />
                <Picker.Item label="12/02/2021" value="12/02/2021" />
            </Picker>
            {/* {dateChoosen ?<Text> You have picked:{selectedDate} </Text>:<View /> } */}
            {dateChoosen ? timePicker:<View /> }
        </View>
    );
}


export default ProfilePage;