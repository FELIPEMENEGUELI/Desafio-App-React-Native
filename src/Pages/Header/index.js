import React from "react";
import { View, SafeAreaView, Image} from "react-native";
import style from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

 function HeaderTitle() {
  const navigation = useNavigation();
  clearAsyncStorage = async() => {
    AsyncStorage.clear();
}
  return (
    <SafeAreaView>
      <View style={style.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Icon style={style.Icon} name="exit-outline" size={35} color="#000"/>
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source={require("../../Assets/logo-info4.png")}
            style={style.logo}/>
        </TouchableOpacity>
         
      </View>
    </SafeAreaView>
  );
}
export default HeaderTitle;