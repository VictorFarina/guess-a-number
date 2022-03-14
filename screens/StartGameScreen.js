import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import Card from "../components/Card"
import Input from "../components/Input"

import Colors from "../constants/colors"

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const inputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, " "))
    console.log(enteredValue)
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
          />
          <View style={styles.buttonContainer}>
            <Button title='Reset' onPress={() => {}} color={Colors.primary} />
            <Button title='Confirm' onPress={() => {}} color={Colors.accent} />
          </View>
        </Card>
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
})

export default StartGameScreen
