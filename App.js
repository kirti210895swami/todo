import React,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import Header from './componets/header';
import TodoItem from './componets/Todo';
import AddTodo from './componets/addTodo';

export default function App() {
   const [todos,setTodos] = useState([
     {text: 'Create todo app' , key : '1'},
     {text: 'Completed signup app' , key : '2'},
     {text: 'Food api' , key : '3'}
   ]);

   // function to delete a item from todo on clicking the item
   const pressHandler = (key) => {
     setTodos( (prevTodos) => {
       return prevTodos.filter(todos => todos.key != key );
     });
   }

   // function to add a item in todo on pressing the button
    const submitHandler = (text) => {
      setTodos((prevTodos) => {
         return [
           {text:text , key: Math.random().toString()},
           ...prevTodos
         ];
      })
    }

  return (
    <View style={styles.container}>
      <Header/>
      {/*header */}
        <View style={styles.content}>
          {/* to do form  */}
             <AddTodo  submitHandler={submitHandler} />
            <View style={styles.list}>
               <FlatList 
                data = {todos}
                renderItem ={({ item }) => (
                  <TodoItem  item = {item}   pressHandler={pressHandler}/>
                )}
               />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    //alignItems: 'center',
    //justifyContent: 'center',
  }, 
  content:{
    padding: 20
  },
  list:{
    margin:20
  }
});
