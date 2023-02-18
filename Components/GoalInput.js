import {useState} from 'react';
import { TextInput ,View,Button ,StyleSheet,Modal,Input,Image} from 'react-native';

function GoalInput(props){

    const [enterGoalText,setEnteredText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredText(enteredText)
      }
   
      function addGoalHandler(){
         props.onAddGoal(enterGoalText);
         setEnteredText('')
      }

    return(
       <Modal backgroundColor='#1e085a' animationType='slide' visible={props.visible}>

          <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/img/goal.gif')} />
            <TextInput
           style={styles.textInput}
           placeholder='  ..Enter a goal' 
           onChangeText={goalInputHandler}
           value={enterGoalText}
            />

         <View style={styles.buttonContainer}>
               <View style={styles.button}>
                 <Button 
                 color="#5e0acc"
                 title='Add goal' onPress={addGoalHandler}/>
               </View>

               <View style={styles.button}>
                  <Button 
                  color="#f31282"
                 title='Cancel' onPress={props.onCancel}/>
               </View>
         </View>
             
          </View> 
       </Modal> 
    )

}
export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        display:'flex',
        alignItems:'center',
        marginBottom:24,
        backgroundColor:'#1e085a',
        height:'100%'
        
      },
      textInput:{
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderWidth:1,
        borderRadius:6,
        padding:16,
        width:'95%',
        marginRight:5,
        padding:5
      },
      buttonContainer:{
        flexDirection:'row'
      },
      button:{
       width:100,
       marginTop:10,
       marginHorizontal:8
      },
      image:{
        width:100,
        height:100,
        margin:20,
        borderRadius:10,
        overflow:'hidden'
      }

})