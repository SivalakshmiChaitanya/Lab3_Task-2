import React, { useState } from 'react';
 import {
 StyleSheet, Text, TextInput, View,
 FlatList, TouchableOpacity
 } from 'react-native';

 export default function App() {
 const [task, setTask] = useState('');
 const [tasks, setTasks] = useState([]);
 const addTask = () => {
 if (task.trim()) {
 setTasks([...tasks, { id: Date.now().toString(), text: task }]);
 setTask('');
 }
 };

 const deleteTask = (taskId) => {
 setTasks(tasks.filter((item) => item.id !== taskId));
 };

 return (
 <View style={styles.container}>
 <Text style={styles.title}>Simple To-Do List</Text>
 <View style={styles.inputContainer}>
 <TextInput
 style={styles.input}
 placeholder="Add a new task"
 value={task}
 onChangeText={(text) => setTask(text)}
 />
 <TouchableOpacity style={styles.addButton} onPress={addTask}>
 <Text style={styles.addButtonText}>+</Text>
 </TouchableOpacity>
 </View>
 <FlatList
 data={tasks}
 renderItem={({ item }) => (
 <View style={styles.taskContainer}>
 <Text style={styles.taskText}>{item.text}</Text>

 <TouchableOpacity onPress={() => deleteTask(item.id)}>
 <Text style={styles.deleteButton}>X</Text>
 </TouchableOpacity>
 </View>
 )}
 keyExtractor={(item) => item.id}
 />
 </View>
 );
 }

 const styles = StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: '#fff',
   paddingTop: 50,
   paddingHorizontal: 20,
   },
   title: {
   fontSize: 24,
   fontWeight: 'bold',
   color: '#333',
   marginBottom: 20,
   },
   inputContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: 20,
   },
   input: {
   flex: 1,
   height: 40,
   borderColor: '#ddd',
   borderWidth: 1,
  
   paddingHorizontal: 10,
   borderRadius: 5,
   },
   addButton: {
   backgroundColor: '#5C5CFF',
   height: 40,
   width: 40,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 20,
   marginLeft: 10,
   },
   addButtonText: {
   color: 'white',
   fontSize: 24,
   fontWeight: 'bold',
   },
   taskContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 10,
   borderBottomColor: '#ddd',
   borderBottomWidth: 1,
   },
   taskText: {
   fontSize: 16,
   color: '#333',
   },
   deleteButton: {
   color: '#FF5C5C',
   fontWeight: 'bold',
   fontSize: 18,
   },
   });