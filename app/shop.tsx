import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "@/components/ui/heading";
import InputField from "@/components/ui/input";
import { PRODUCTS } from "@/constants/products";
import ProductCard from "@/components/common/product-card";
const ICON_SIZE = 20;
const Shop = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <FontAwesome name="navicon" size={ICON_SIZE} />
        <FontAwesome name="search" size={ICON_SIZE} />
      </View>

      <ScrollView style={styles.body}>
        <Heading text={`Hello ${"\n"}There 👌`} />
        <InputField
          icon={<FontAwesome name="search" />}
          placeholder="Search Products..."
        />

        <View style={{ marginVertical: 10 }}>
          <Heading
            style={{
              fontSize: 25,
            }}
            text={`Products`}
          />
        </View>

        <View>
          {PRODUCTS.map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                price={product.price} id={product.id}              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    marginHorizontal: 20,
  },
});

export default Shop;
