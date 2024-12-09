import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, View, StyleSheet, Text} from "react-native";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const item = params; // Destructure params for better readability
  // console.log("restaurant:", item)
  return (
    <View style={styles.container}>
      <CartIcon/>
      <StatusBar style="light"/>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Restaurant Image */}
        <Image style={styles.image} source={item.image} />

        {/* Content Container */}
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <View>
            <View style={styles.details}>
              {/* Stars and Reviews */}
              <View style={styles.ratingRow}>
                <Image
                  style={styles.starIcon}
                  source={require("../assets/images/fullStar.png")}
                />
                <Text style={styles.stars}>{item.stars}</Text>
                <Text style={styles.reviews}>
                  ({item.reviews} reviews`) .<Text>{item.category} </Text>
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <View>
            <Text style={styles.text}>Menu</Text>
            {item.dishes.map((dish, index) => (
              <DishRow item={{ ...dish }} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  description: {
    fontSize: 15, // text-xs
    color: "#4b5563",
  },
  text: {
    fontSize: 30, // text-xs
    color: "#4b5563", // text-gray-700
  },
  image: {
    height: 200,
    width: "100%",
  },
  contentContainer: {
    marginTop: -30, // Slight overlap effect
    backgroundColor: "#f8f8f8",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  details: {
    paddingHorizontal: 8, // px-3
    paddingBottom: 8, // pb-4
    marginTop: 4, // space-y-2
  },
  name: {
    fontSize: 18, // text-lg
    fontWeight: "bold", // font-bold
    paddingTop: 8, // pt-2
  },
  ratingRow: {
    flexDirection: "row", // flex-row
    alignItems: "center", // items-center
    marginTop: 4, // space-x-1
  },
  starIcon: {
    height: 16, // h-4
    width: 16, // w-4
    marginRight: 4, // space between icon and text
  },
  stars: {
    fontSize: 12, // text-xs
    color: "#10b981", // text-green-700
    marginRight: 4, // Space between stars and reviews
  },
  reviews: {
    fontSize: 15, // text-xs
    color: "#4b5563", // text-gray-700
  },
});
