import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import MiniCard from "@/components/cards/MiniCard";

export default function index() {
  return (
    <ScreenWrapper title="Your Party">
      
      <MainCard
        title="Vice Awakens"
        participating={3}
        imgUrl="https://res.cloudinary.com/dvqbwddan/image/upload/f_auto,q_auto/v1/Dispositivos%20M%C3%B3veis/fwfkhhurp80jdyvg1zt6"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Title>MEMBERS</Title>

      <Card>
        <Text>Invite a Member</Text>
      </Card>

      <MiniCard 
      name= "Snorlax"
      user= "@ToComSono"
      imgUrl = "https://res.cloudinary.com/dvqbwddan/image/upload/f_auto,q_auto/v1/Dispositivos%20M%C3%B3veis/cpigsfcp3oyelqrqtxqi"
      level={50}
      
      />
      <Card>
        <Text>index</Text>
      </Card>
    </ScreenWrapper>
  );
}
