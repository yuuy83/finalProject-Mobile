import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import * as Icon from "react-native-feather";
import { featured } from "../constants";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItem,
  selectCartTotal,
} from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItem);
  const cartotal = useSelector(selectCartTotal);
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const deliveryFee = getRandomNumber(1, 50);
  const [groupedItems, setGroupedItem] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItem(items);
  }, [cartItems]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            styles.controlButton,
            { backgroundColor: themeColors.bgColor(1) },
          ]}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Your Cart</Text>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <View
        style={[
          styles.deliveryContainer,
          { backgroundColor: themeColors.bgColor(0.1) },
        ]}
      >
        <Image
          style={styles.deliveryImage}
          source={require("../assets/images/tom-flying-tom-cat-flying.gif")}
        />
        <Text style={styles.deliveryText}>Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={[styles.changeText, { color: themeColors.bgColor(1) }]}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View key={key} style={styles.dishContainer}>
              <Text style={styles.dishQuantity}>{items.length} x</Text>
              <Image source={{uri: urlFor(dish.image).url()}} style={styles.dishImage} />
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>{dish.name}</Text>
                <Text style={styles.dishDescription}>{dish.description}</Text>
              </View>
              <View style={styles.priceAndControl}>
                <Text style={styles.dishPrice}>${dish.price}</Text>
                <TouchableOpacity
                  style={[
                    styles.controlButton,
                    { backgroundColor: themeColors.bgColor(1) },
                  ]}
                  onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                >
                  <Icon.Minus
                    width={20}
                    height={20}
                    strokeWidth={3}
                    stroke="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>${cartotal}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryText}>${deliveryFee}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryText, styles.boldText]}>Total</Text>
          <Text style={[styles.summaryText, styles.boldText]}>${deliveryFee + cartotal}</Text>
        </View>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("OrderPrepairing")}
        style={[
          styles.placeOrderButton,
          { backgroundColor: themeColors.bgColor(1) },
        ]}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 26,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  restaurantName: {
    fontSize: 16,
    color: "#666",
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  deliveryImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
  },
  deliveryText: {
    fontSize: 16,
    color: "#333",
  },
  changeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  dishContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  dishQuantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    color: "#333",
  },
  dishImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  dishInfo: {
    flex: 1,
  },
  dishName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  dishDescription: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  dishPrice: {
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  priceAndControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
    marginTop: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  placeOrderButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  placeOrderText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
