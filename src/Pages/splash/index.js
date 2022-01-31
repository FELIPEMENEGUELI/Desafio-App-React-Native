import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styled } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: 1,
    title: "Conheça nosso App de inteligência!",
    text: "Fique por dentro de tudo o que acontece nas redes sociais.",
    image: require("../../Assets/monit4.png")
  },

  {
    key: 3,
    title: "Monitore em tempo real!",
    text: "Através de palavras chaves, busque a informação desejada.",
    image: require("../../Assets/monit6.png")
  },
];

export default function Splash(){
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState(false);

  function renderSlides ({ item }){
    return(
      <View style={styled.container}>
      <Text style={styled.title}> 
        {item.title} 
      </Text>
        <Image 
        style={styled.img1}
        source={item.image}
        />

      <Text style={styled.text}> 
        {item.text} 
      </Text>
      </View>
    )

}

  if (showHome) {
    return <Text> Home</Text>;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: "#00BFDF",
          width: 20,
        }}
        renderNextButton={() => <Text style={styled.next}> Next </Text>}
        renderPrevButton={() => <Text style={styled.next}> Back </Text>}
        renderDoneButton={() => <Text style={styled.acess}> Login </Text>}
        onDone={() => navigation.navigate("Login")}
      />
    );
  }
}


