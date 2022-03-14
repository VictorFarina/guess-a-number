import React from "react"
import { StyleSheet, View, Text, TextInput, Button } from "react-native"

const Card = (props) => {
  console.log(props.children);
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: "white",
    elevation: 5,
    padding: 30,
    borderRadius: 10, 
  },
})

export default Card