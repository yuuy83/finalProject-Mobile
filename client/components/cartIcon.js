import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function CartIcon() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={[styles.cartButton, { backgroundColor: themeColors.bgColor(1) }]}>
        {/* Cart Count */}
        <View style={[styles.cartCount, { backgroundColor: "rgba(255,255,255,0.3)" }]}>
          <Text style={styles.cartCountText}>3</Text>
        </View>

        {/* View Cart */}
        <Text style={styles.cartText}>View Cart</Text>

        {/* Total Amount */}
        <Text style={styles.cartTotal}>$23</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20, // Equivalent to bottom-5
    width: "100%", // Equivalent to w-full
    zIndex: 50, // Equivalent to z-50
    alignItems: "center", // Center align horizontally
  },
  cartButton: {
    flexDirection: "row", // Align items in a row
    justifyContent: "space-between", // Space between the cart elements
    alignItems: "center", // Center align vertically
    paddingVertical: 12, // Equivalent to py-3
    paddingHorizontal: 16, // Equivalent to px-4
    borderRadius: 999, // Fully rounded
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6, // Shadow for Android
    marginHorizontal: 20, // Equivalent to mx-5
  },
  cartCount: {
    padding: 8, // Equivalent to p-2
    borderRadius: 999, // Fully rounded
  },
  cartCountText: {
    fontWeight: "800", // Equivalent to font-extrabold
    color: "#fff", // Equivalent to text-white
    fontSize: 16, // Equivalent to text-lg
  },
  cartText: {
    flex: 1, // Equivalent to flex-1
    textAlign: "center", // Equivalent to text-center
    fontWeight: "800", // Equivalent to font-extrabold
    color: "#fff", // Equivalent to text-white
    fontSize: 16, // Equivalent to text-lg
  },
  cartTotal: {
    fontWeight: "800", // Equivalent to font-extrabold
    color: "#fff", // Equivalent to text-white
    fontSize: 16, // Equivalent to text-lg
  },
});
