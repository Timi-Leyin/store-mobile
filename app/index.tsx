import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AuthLayout from "@/components/layouts/auth-layout";
import InputField from "@/components/ui/input";
import Button from "@/components/ui/button";
import { Link, useRouter } from "expo-router";
import { FONTS } from "@/constants/fonts";

const Login = () => {
  const router = useRouter()
  return (
    <AuthLayout>
      <View>
        <InputField placeholder="Email Address" />
        <Button onPress={()=> router.push("/shop")} text={"Continue"} />

        <View style={styles.helperText}>
          <Text style={styles.lightText}>Don't have an Account?</Text>
          {/* <Link href={""}> 
       </Link> */}
          <Text style={styles.boldText}>Register</Text>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  lightText: {
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  boldText: {
    fontFamily: FONTS.bold,
    fontWeight: "normal",
    fontSize: 12,
  },
  helperText: {
    display: "flex",
    flexDirection: "row",
    fontFamily: FONTS.bold,
    fontWeight: "normal",
    gap: 3,
    alignItems: "center",
  },
});

export default Login;
