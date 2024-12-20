import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFeaturedRestaurants } from "../api";
import Categorises from "../components/categorises";
import FeaturedRow from "../components/featuredRow";
import { themeColors } from "../theme";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    getFeaturedRestaurants().then((data) => {
      setFeaturedRestaurants(data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon.Search height={25} width={25} stroke="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for restaurants, food..."
          placeholderTextColor="gray"
        />
        <View style={styles.locationContainer}>
          <Icon.MapPin height={20} width={20} stroke="gray" />
          <Text style={styles.locationText}>Binh Duong</Text>
        </View>
        <View style={[styles.filterContainer, { backgroundColor: themeColors.bgColor(1) }]}>
          <Icon.Sliders height={25} width={25} stroke="white" strokeWidth={2.5} />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categorises />

        {/* Featured Restaurants */}
        <View>
          {featuredRestaurants.length > 0 ? (
            featuredRestaurants.map((item) => (
              <FeaturedRow
                key={item._id}
                title={item.name}
                restaurant={item.restaurants}
              />
            ))
          ) : (
            <Text style={{ textAlign: "center", marginTop: 20 }}>Loading...</Text>
          )}
        </View>
      </ScrollView>

      {/* Login Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.button, { backgroundColor: themeColors.bgColor(1) }]}
        >
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    color: "gray",
    marginLeft: 4,
  },
  filterContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    margin: 1,
    alignItems: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
