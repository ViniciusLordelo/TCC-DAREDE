//Packages
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: "30px",
    marginRight: "auto",
    marginBottom: "30px",
    marginLeft: "auto",
    backgroundColor: "#1B57A6",
    width: 167.5,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});