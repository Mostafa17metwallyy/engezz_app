import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Linking,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import api from "../services/api";
import styles from "../styles/map_screen"; // ✅ Styling file
import BottomNav from "./bottomNav";

const LocationMapScreen = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllLocations = async () => {
      try {
        const tolls = await api.get("/tolls");
        const parkings = await api.get("/parkings");
        const all = [...tolls.data, ...parkings.data];
        setLocations(all);
      } catch (error) {
        console.error("Error loading map data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllLocations();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E90FF" />
        <Text style={styles.loadingText}>Loading map...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>LOCATION MAP</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.0444,
          longitude: 31.2357,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {locations.map((item) => {
          if (
            !item.coordinates ||
            typeof item.coordinates.lat !== "number" ||
            typeof item.coordinates.lng !== "number"
          ) {
            return null;
          }

          const name = item.name || item.location_name || "Unnamed";
          const place = item.location || item.location_name || "";
          const mapsUrl = item.location_url
            ? item.location_url
            : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                place
              )}`;

          return (
            <Marker
              key={item._id}
              coordinate={{
                latitude: item.coordinates.lat,
                longitude: item.coordinates.lng,
              }}
              title={name}
              description={place}
              pinColor="red"
              onCalloutPress={() => Linking.openURL(mapsUrl)}
            />
          );
        })}
      </MapView>

      <BottomNav />
    </View>
  );
};

export default LocationMapScreen;
