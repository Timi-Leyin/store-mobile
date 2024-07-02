import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "@/constants/fonts";

const Button = ({ text, onPress }: { text: string; onPress?: any }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 30,
    marginVertical: 20,
    backgroundColor: "#8e6cef",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: FONTS.bold,
    fontWeight: "normal",
  },
});

export default Button;
