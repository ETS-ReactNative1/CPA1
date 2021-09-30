import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';



const DATA = [
  {
    id: '001',
    name: 'Malai',
    passion: 'Building things',
    intrests: 'Startups, Technology and Sports',
    graduationYear: '2023',
    qualification: 'Masters Computer Science',
    imageLink: require('../assets/CartoonImages/Malai.jpeg')
  },
  {
    id: '002',
    name: 'GPal',
    passion: 'Growing a large interesting company',
    intrests: 'Entreprenuership, Crypto',
    graduationYear: '2021',
    qualification: 'Masters Computer Science',
    imageLink: require('../assets/CartoonImages/Girri.jpeg')
  },
  {
    id: '003',
    name: 'Rahm',
    passion: 'Research',
    intrests: 'Biotech, research',
    graduationYear: '2018',
    qualification: 'MD PHD in Bio-Chemistry',
    imageLink: require('../assets/CartoonImages/Rahm.jpeg')
  },
];

const Item = ({name, passion, intrests, graduationYear,qualification,imageLink}) => (
  // <View style={styles.item}>
  //   <Text style={styles.title}>{name}</Text>
  //   <Text>{passion}</Text>
  // </View>
  <View style={styles.container}>

    <View style = {styles.innerContainer}>
      <View style = {styles.image}>
        <Image style={{width: 100, height: 100}} source={imageLink} />
        
        <Text style={styles.nameText}>{name}</Text>
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
    <Item name={item.name} passion={item.passion} intrests={item.intrests} graduationYear={item.graduationYear} qualification={item.qualification} imageLink={item.imageLink} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
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
    flex: 1,
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
    padding: 50,
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
  contactButton:{
      color: 'lightblue'
  },
  image:{
    flex:1,
    // flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'lightgreen',
    padding: 30,

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