import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MainCardProps = {
  name: string;
  user: string;
  imgUrl: string;
  level: number;
  role: string;
};

export default function MiniCard({
  name,
  user,
  imgUrl,
  level,
  role,
}: MainCardProps) {
  return (
    <Card>
      <View style={styles.container}>

        

        <View style={styles.statsContainer}>
        

          <Image
          source={{ uri: imgUrl }}
          width={100}
          height={100}
          style={{ width: 100, height: 100 }}
        />
          <View style={styles.statsRight}>
            <Text>{name}</Text>
            
            <Text>{user}</Text>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "100%" }} />
            </View>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar2, width: "65%" }} />
            </View>

            <Text>Level  {level} </Text>
          </View>
          <View>
          <Text >{role} Role</Text>
          </View>
          
        </View>
      </View>
    </Card>
  );  
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  statsRight: {
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
    marginTop: 16,
  },
  bar: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  bar2: {
    backgroundColor: "rgb(63 159 242)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  footer: {
    backgroundColor: "rgb(255 166 36)",
  },
});
