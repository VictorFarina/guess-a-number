import React from "react";
import { StyleSheet, View, Text, TextInput,Button } from "react-native";
import Card from "../components/Card";

import Colors from '../constants/colors';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> StartGameScreen </Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Select a number</Text>
            <View style={styles.buttonContainer}>
              <Button title='Reset' onPress={() => {}}   color={Colors.primary}/>
              <Button title='Confirm' onPress={() => {}} color={Colors.accent}/>
            </View>
        </Card>
    </View>
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
    shadowColor: "black"
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
})

export default StartGameScreen
