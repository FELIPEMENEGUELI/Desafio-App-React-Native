import React, { useState, useEffect} from "react";
import {View, Text, KeyboardAvoidingView, Image, TouchableOpacity, TextInput,
  TouchableWithoutFeedback, Keyboard, Animated, Alert} from "react-native";
import { styled } from "./style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

export default function Login(){
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
  const [opacity] = useState(new Animated.Value(0));
  const [login, setLogin] = useState("");   
  const [senha, setSenha] = useState("");

  function handleLogin () {
    if(login=='info4@gmail.com' && senha=='2022'){
      navigation.navigate('Home');
      return true
    }else{
      Alert.alert("Verifique as informações preenchidas.")
    }
  }
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 10,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  async function Salvar(){
    const user ={
      login, senha
    }
    await AsyncStorage.setItem("@usuario", JSON.stringify(user));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView>
        <View>
          <Image style={styled.logo}
            source={require("../../Assets/teste1.png")}
            />
        </View>
        <Animated.View
          style={[
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
            ]}>

          <View style={styled.inputArea}>
            <TextInput style={styled.inputUsuario}
              value={login}
              type="login" name="login" id="login" 
              placeholder="Login"
              autoCapitalize='none'
              onChangeText={(text) => setLogin(text)}
              autoCorrect={false}/>
          </View>

          <View style={styled.inputArea1}>
            <TextInput style={styled.inputSenha}
              value={senha}
              type="senha" name="senha" id="senha" 
              placeholder="Senha"
              keyboardType="numeric"
              onChangeText={(text) => setSenha(text)}
              secureTextEntry={hidePass}/>

            <TouchableOpacity style={styled.icon} onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <Icon name="eye" color="#000" size={25} />
              ) : (
                <Icon name="eye-slash" color="#000" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styled.direction}>
          <BouncyCheckbox
               style={styled.iconC}
                  size={25}
                  fillColor="#00BFDF"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "#C0C0C0" }}
                  onPress={Salvar}
                />

            <Text style={styled.textM}> Manter Conectado</Text>
          </View>

          <View style={styled.btnFundo}>
            <TouchableOpacity   onPress={handleLogin}>
              <Text style={styled.btn}>Entrar</Text>
            </TouchableOpacity>
          </View>
          
        </Animated.View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    
  );
}