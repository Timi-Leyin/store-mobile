import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "@/constants/fonts";

const InputField = ({ placeholder, icon }: { placeholder?: string, icon?:any }) => {
  return (
    <View style={styles.inputContainer}>
      {icon}
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: FONTS.bold,
    fontSize: 13,
    flex:1,
    fontWeight: "normal",
  },

  inputContainer: {
    backgroundColor: "#f4f4f4",
    padding: 16,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    borderRadius:6,
    marginVertical: 6,
  },
});

export default InputField;
