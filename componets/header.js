import React,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

export default function Header()  {
  return (
      <View  style={styles.header}>
          <Text style={styles.title}> My Todos </Text>
      </View>
  );
}

const styles = StyleSheet.create({
    header :{
        height : 80,
        paddingTop: 20,
        paddingBottom:30,
        backgroundColor: '#A52A2A'
    },
    title:{
        textAlign:'center',
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        justifyContent:'center'
    }
});
