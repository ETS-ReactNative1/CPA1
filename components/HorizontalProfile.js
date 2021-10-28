import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList ,TextInput } from 'react-native';
import OnlineStatus from './OnlineStatus'



const DATA = [
  {
    id: '001',
    name: 'Malai',
    // name: 'true',
    passion: 'Building things',
    intrests: 'Startups, Technology and Sports',
    graduationYear: '2023',
    qualification: 'Masters Computer Science',
    imageLink: require('../assets/CartoonImages/Malai.jpeg'),
    online: true
  },
  {
    id: '002',
    name: 'GPal',
    passion: 'Growing a large interesting company',
    intrests: 'Entreprenuership, Crypto',
    graduationYear: '2021',
    qualification: 'Masters Computer Science',
    imageLink: require('../assets/CartoonImages/Girri.jpeg'),
    online: false
  },
  {
    id: '003',
    name: 'Rahm',
    passion: 'Research',
    intrests: 'Biotech, research',
    graduationYear: '2018',
    qualification: 'MD PHD in Bio-Chemistry',
    imageLink: require('../assets/CartoonImages/Rahm.jpeg'),
    online: true
  },
];

const Item = ({name, passion, intrests, graduationYear,qualification,imageLink,online}) => (
  // <View style={styles.item}>
  //   <Text style={styles.title}>{name}</Text>
  //   <Text>{passion}</Text>
  // </View>
  <View style={styles.container}>

    <View style = {styles.innerContainer}>
      <View style = {styles.image}>
        <Image style={{width: 100, height: 100}} source={imageLink} />
        
        <Text style={styles.nameText}>{name}</Text>
        <OnlineStatus online= {online} />
      </View>
      <View style = {styles.detailsContainer}>
        <Text>Passion:{passion}</Text>
        <Text>Intrests:{intrests}</Text>
        <Text>Graduation Year: {graduationYear}</Text>
        <Text>Qualification:{qualification}</Text>
      </View>
    </View>
    <View>
        <Button style={styles.contactButton} title = {`Contact ${name} today`} />
    </View>
    
  </View>
);

const ProfileRow = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} passion={item.passion} intrests={item.intrests} graduationYear={item.graduationYear} qualification={item.qualification} imageLink={item.imageLink} online ={item.online} />
  );
  const [filteredName,setFilteredName] = useState("");
  const [filterName,setFilterName] = useState(false);
  const [filterOnline,setFilterOnline] = useState(false);
  useEffect (()=>{{}},[])

  let filteredData = ""
  // if (filterName){
  //   filteredData = (DATA.filter(item=>item.name==filteredName))
  // }  else {
  //   filteredData = DATA
  // }
  if (filterOnline){
    filteredData = (DATA.filter(item=>item.online==true))
  }  else {
    filteredData = DATA
  }
  return (
    <View style={styles.container}>

        <View style={styles.filterContainer}>
          {/* <Text>Filter by Alumni Name: </Text> */}
          {/* <TextInput placeholder='Filter by name' onChangeText={(text)=>setFilteredName(text)} />
          <Button title= 'Filter' onPress={() => setFilterName (true)} /> */}
          <Button title= 'Show Only Online Alumni' onPress={() => setFilterOnline (true)} />
          <View>
           <Button color= 'red' title= 'Reset' onPress={() => {setFilterName (false)
                                               setFilterOnline(false)}} />
         
          </View>
        </View>

      {/* <View style={styles.filterContainer}>
        <Text>Filter by Alumni Name: </Text>
        <TextInput placeholder='Filter by name' onChangeText={(text)=>setFilteredName(text)} />
        <Button title= 'Filter' onPress={() => setFilterName (true)} />
        <Button title= 'Reset' onPress={() => setFilterName (false)} />
      </View> */}

      {/* {console.log(filteredName)} */}

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal= {true}
      />
        
    </View>
  );
}

export default ProfileRow;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    // borderWidth: '2pt',
    borderColor:'orange',
  },  
  innerContainer: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    // borderWidth: '2pt',
    // borderColor:'red',
  },
  detailsContainer:{
      flex:1,
      backgroundColor:'lightgreen',      
      alignItems: 'center',    
      justifyContent: 'center',
      padding: 50,
      margin: 25,
      // borderWidth: '2pt',
  },
  filterContainer:{
    // flex:1,
    backgroundColor:'lightgreen',      
    alignItems: 'center',    
    justifyContent: 'center',
    padding: 20,
    margin: 25,
    // flexDirection: 'row'
},
  contactButton:{
      color: 'lightblue'
  },
  image:{
    flex:1,
    // flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'lightgreen',
    padding: 50,
    // margin: 20,

  },   
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  nameText:{
    fontSize:25,

  }    
});