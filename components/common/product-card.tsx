import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Heading from "../ui/heading";
import { FONTS } from "@/constants/fonts";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "@/context/cart-context";

const ProductCard = ({
  id,
  name,
  description,
  price,
}: {
  id: number;
  name: string;
  description: string;
  price: string;
}) => {
  const { carts, removeCart, updateCart } = useCart();

  const handleAddToCart = () => {
    const newItem = { id, name, description, price };
    updateCart(newItem);
  };

  const handleRemoveFromCart = () => {
    removeCart(id);
  };

  const isInCart = carts.some((cartItem) => cartItem.id === id);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/images/placeholder.png")}
      />
      <View>
        <Heading
          text={name}
          style={{
            fontSize: 20,
          }}
        />
        <Text style={styles.text}>{description}</Text>
        <View style={styles.actionContainer}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:10,
          }}
            onPress={isInCart ? handleRemoveFromCart : handleAddToCart}
          >
            <FontAwesome
              name={isInCart ? "cart-arrow-down" : "cart-plus"}
              size={25}
              color="#8e6cef"
            />
            <Text style={{
                fontSize:12,
                fontFamily:FONTS.regular,
                fontWeight:"normal"
            }}>{isInCart &&  "Remove from Cart"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    opacity: 0.7,
    marginRight: 100,
    fontWeight: "normal",
  },
  container: {
    display: "flex",
    paddingHorizontal: 10,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  price: {
    color: "#8e6cef",
    fontSize: 20,
    fontFamily: FONTS.bold,
    fontWeight: "normal",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
