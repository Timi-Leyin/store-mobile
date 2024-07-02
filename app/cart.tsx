import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useCart } from "@/context/cart-context";
import { FONTS } from "@/constants/fonts";
import Button from "@/components/ui/button";
import { FontAwesome } from "@expo/vector-icons";
import Heading from "@/components/ui/heading";
import { useRouter } from "expo-router";

const renderItem = ({ item }:any) => (
  <View style={styles.cartItem}>
    <Text style={styles.itemName}>{item.name}</Text>
    <Text style={styles.itemDescription}>{item.description}</Text>
    <Text style={styles.itemPrice}>{item.price}</Text>
  </View>
);

const ICON_SIZE = 20;
const Cart = () => {
  const { carts } = useCart();
const router = useRouter()
  return (
    <View style={styles.container}>
         <View style={styles.header}>
        <FontAwesome name="navicon" size={ICON_SIZE} />
        <FontAwesome name="search" size={ICON_SIZE} />
      </View>
      {/* <Text style={styles.title}>Cart</Text> */}
      <Heading text={"Carts"} />
      {carts.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={carts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {carts.length > 0 && <Button onPress={()=> router.push("/checkout")} text="Checkout" />}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
      },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    textAlign: "center",
    marginTop: 20,
  },
  cartItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 18,
    fontFamily: FONTS.bold,
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: "#555",
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: "#8e6cef",
    marginTop: 5,
  },
  checkoutButton: {
    backgroundColor: "#8e6cef",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutText: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: "#fff",
  },
});
