import {useState} from 'react';
import { StyleSheet,View,FlatList ,Button} from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible,setModalIsVisible]= useState(false)
  
  const [courseGoals,setCourseGoals] = useState([])
  function startAddGoalHandler (){
    setModalIsVisible(true)
  }
  function endAddGoalHandler (){
    setModalIsVisible(false)
  }

  

    function addGoalHandler(enterGoalText){
       setCourseGoals((currentGoals)=>[
        ...currentGoals ,{
         text: enterGoalText,
         key:Math.random().toString(),
         id:Math.random().toString()
        }
      ])
      endAddGoalHandler()
    }
    function deleteGoalHandler(id){
      console.log('delete')
      setCourseGoals(currentGoals=>{
        return currentGoals.filter((goal)=>goal.id !== id)
      })
    }


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.AppContainer}>  
    <Button 
       title='Add new Goal' 
       color='green'
       onPress={startAddGoalHandler}
       />
   <GoalInput 
      visible={modalIsVisible}
      onAddGoal={addGoalHandler} 
      onCancel={endAddGoalHandler}
        />
    <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
        renderItem={(itemData)=>{
             console.log(itemData)
          return (
           <GoalItem 
            id={itemData.item.id}
            text={itemData.item.text}
            onDeleteItem={deleteGoalHandler}
           
            />
          )
        }} 
         keyExtractor={(item,index)=> {
             return item.id;
         } }
         alwaysBounceVertical={false}  />
      
    </View>
    </View>
    </>
  );

}

const styles = StyleSheet.create({
  AppContainer: {
   paddingTop:50,
   paddingHorizontal:16,
   flex:3,
   backgroundColor:'#1e085a'
  },
  goalsContainer:{
    flex:4
  },

});
