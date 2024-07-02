import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "@/constants/fonts";

const Heading = ({ text, style }: { text: string, style?:any }) => {
  return <Text style={[styles.heading, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 35,
    fontFamily: FONTS.bold,
    fontWeight: "normal",
  },
});
export default Heading;
