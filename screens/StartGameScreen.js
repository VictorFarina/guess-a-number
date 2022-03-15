import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native"
import Card from "../components/Card"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors"

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, " "))
  }

  const resetInputHandler = () => {
    setEnteredValue("")
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!','You can only choosee a number betwen 0 and 99', [{text:'Ok', onPress:resetInputHandler}])

      return;
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue("");
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmedOutput}>
        <Text>  You Selected:   </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
      </Card>
    )
  
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}> StartGameScreen </Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              title='Reset'
              onPress={resetInputHandler}
              color={Colors.primary}
            />
            <Button
              title='Confirm'
              onPress={confirmInputHandler}
              color={Colors.accent}
            />
          </View>
        </Card>

        
        {confirmedOutput}
        
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginVertical: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  title: {
    color: "black",
    fontSize: 18,
    marginVertical: 40,
  },

  input: {
    width: 50,
    textAlign: "center",
  },

  confirmedOutput:{

    marginTop:20
   


  }
})

export default StartGameScreen
