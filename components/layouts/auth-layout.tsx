import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import Heading from "../ui/heading";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topHeading}>
          <Heading text="Sign in" />
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  topHeading: {
    paddingBottom: 30,
  },
});

export default AuthLayout;
