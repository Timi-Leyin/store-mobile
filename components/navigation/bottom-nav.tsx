import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TabBarIcon } from "./tab-bar-icon";
import { FONTS } from "@/constants/fonts";
import { useCart } from "@/context/cart-context";
import { usePathname, useRouter } from "expo-router";

const BottomNav = () => {
  const { carts } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  if (pathname == "/" || pathname == "/checkout") {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push("/shop");
        }}
        style={styles.navItem}
      >
        <TabBarIcon name={"home"} />
        <Text style={styles.navText}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/cart");
        }}
        style={styles.navItem}
      >
        <TabBarIcon name={"cart"} />
        <Text style={styles.navText}>Cart ({carts.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    gap: 20,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "auto",
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    gap: 6,
  },
  navText: {
    fontFamily: FONTS.regular,
    fontWeight: "normal",
    fontSize: 10,
  },
});
