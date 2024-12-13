import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={()=> navigation.navigate('Restaurant',{...item})}
    >
      <View style={styles.card}>
        {/* Restaurant Image */}
        <Image style={styles.image} source={{uri: urlFor(item.image).url()}} />

        {/* Restaurant Details */}
        <View style={styles.details}>
          {/* Name */}
          <Text style={styles.name}>{item.name}</Text>

          {/* Stars and Reviews */}
          <View style={styles.ratingRow}>
            <Image
              style={styles.starIcon}
              source={require("../assets/images/fullStar.png")}
            />
            <Text style={styles.stars}>{item.stars}</Text>
            <Text style={styles.reviews}>
              ({item.reviews} reviews) .<Text>{item?.type?.name} </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 6,
    backgroundColor: "#fff",
    borderRadius: 16, // Equivalent to rounded-3xl
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10, // Equivalent to shadow-lg
    elevation: 3, // Android shadow
    overflow: "hidden",
  },
  image: {
    height: 144, // h-36
    width: 256, // w-64
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16, // rounded-t-3xl
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
    fontSize: 12, // text-xs
    color: "#4b5563", // text-gray-700
  },
});
