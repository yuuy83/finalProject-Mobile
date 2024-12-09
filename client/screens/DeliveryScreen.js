import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { featured } from "../constants";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

const DeliveryScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      {/* Info Container */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.estimatedTitle}>Estimated Arrival</Text>
          <Text style={styles.arrivalTime}>5-10 Minutes</Text>
          <Text style={styles.estimatedTitle}>
            Your order is on the <Text style={styles.halfText}>HALF</Text> way!
          </Text>
        </View>
        <View style={styles.infoDeliver}>
          <Image
            style={styles.categoryImage}
            source={require("../assets/images/gojo.jpg")}
          />
          <View>
            <Text style={styles.riderName}>Go Oru</Text>
            <Text style={styles.riderRole}>Your rider</Text>
          </View>
          <TouchableOpacity
           onPress={() => navigation.navigate('Home')}
            style={[
              styles.controlButton,
              { backgroundColor: "white" },
            ]}
          >
            <Icon.X width={50} height={50} strokeWidth={3} stroke="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:"auto",
    flex: 1,
  },
  halfText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    borderWidth: 1,
    borderColor: "#333",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  controlButton: {
    width:"auto" ,
    height: "auto",
    borderRadius: 30,
    marginLeft:"auto",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoBox: {
    marginBottom: 20,
  },
  estimatedTitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  arrivalTime: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  infoDeliver: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 20,
    padding: 15,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ddd",
    marginRight: 15,
  },
  riderInfo: {
    justifyContent: "center",
  },
  riderName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  riderRole: {
    fontSize: 18,
    color: "white",
  },
});

export default DeliveryScreen;
