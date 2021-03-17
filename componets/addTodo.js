import React,{useState} from 'react';
import { Button, StyleSheet, TextInput, View,Text} from 'react-native';

export default function AddTodo ({submitHandler}) {
  const [text,setText] =useState('');

  const changeHandler = (val) => {
     setText(val);
  }

    return (
       <View>
           <TextInput
            style={styles.input}
            placeholder = 'new Todo....'
            onChangeText ={(val) => changeHandler(val)}
           />
           <Button
            
            onPress = {() => submitHandler(text)}
            title ='Add Todo'
            color = '#A52A2A'
           /> 
       </View>
    );
}
 
const styles = StyleSheet.create({
    input:{
        marginBottom:10 ,
        paddingHorizontal:8 ,
        paddingVertical:6 ,
        borderBottomWidth: 1 ,
        borderBottomColor:'black',
        color:'#696969'
    },
    bd : {
      backgroundColor:'pink',
      color: 'grey'
    }
});
 