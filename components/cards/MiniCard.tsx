import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MiniCardProps = {
  name: string;
  user: string;
  imgUrl: string;
  imgUrl2: string;
  imgUrl3: string;
  level: number;
  role: string;
};

export default function MiniCard({
  name,
  user,
  imgUrl,
  imgUrl2,
  imgUrl3,
  level,
  role,
}: MiniCardProps) {
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
            <View style={styles.teste_text_right}>
              <View style={styles.test_imagens_right}>
                <Text style={{ fontWeight: "bold" }}>{name}</Text>

                <Text style={{ color: "rgb(159 155 167)" }}>{user}</Text>
              </View>
              <View style={styles.test_imagens_right}>
                <Image
                  source={{ uri: imgUrl2 }}
                  width={25}
                  height={25}
                  style={{ width: 25, height: 25 }}
                />
                <Image
                  source={{ uri: imgUrl3 }}
                  width={25}
                  height={25}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </View>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "100%" }} />
            </View>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar2, width: "65%" }} />
            </View>
            <View style={styles.teste_text_right}>
              <Text style={{ color: "rgb(159 155 167)" }}>Level {level} </Text>
              <Text style={{ color: "rgb(159 155 167)" }}>{role} Role</Text>
            </View>
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
  teste_text_right: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  test_imagens_right: {
    flexDirection: "row",
  },
});
