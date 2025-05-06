import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";


type MainCardProps = {
  title: string;
  participating: number;
  imgUrl: string;
  name: string;
  hp: number;
  damageDone: number;
};

export default function MainCard({
  title,
  participating,
  imgUrl,
  name,
  hp,
  damageDone,
}: MainCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title_default2}>{title}</Text>
        <Text style={styles.title_default}>{participating}/10 Participating</Text>

        <Image
          source={{ uri: imgUrl }}
          width={100}
          height={100}
          style={{ width: 100, height: 100 }}
        />

        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="sword" size={46} color="black" />
          </View>

          <View style={styles.statsRight}>
            <Text style={styles.title_default2}>{name}</Text>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar, width: "80%" }} />
            </View>

            <Text style={styles.title_default}>{hp} / 1500 HP</Text>
          </View>
        </View>

        <View style={styles.footer }>
          <Text style={styles.text_footer}> {damageDone} Damage Done</Text>
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
  title_default: {
    color: "rgb(159 155 167)",
    textTransform: "uppercase",
  },
  title_default2: {
    fontWeight: "bold",
    marginTop: 8,
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
  },
  bar: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  footer: {
    backgroundColor: "rgb(255 166 36)",
    width: "100%",
    height: 30,
    borderEndEndRadius: 8,
    borderEndStartRadius: 8,
  },
  text_footer: {
    color: "rgb(255, 255, 255)",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
});
