import React, {useEffect, useState} from 'react';
import {api} from '../../Services/api';
import { ProdutoDTO } from '../../Dtos/ProdutoDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, ProdList } from "./style";
import { StyleSheet, StatusBar} from "react-native";
import HeaderTitle from '../Header';
import { Produtos } from "../../Components/Produtos/index";

export default function Home(){
const [produtos, setProdutos] = useState<ProdutoDTO[]>([]);
const [loading, setLoading] = useState(true);
const [usuario, setUsuario] = useState({});

useEffect(() => {
    async function loadData() {
      const usuario2 = await AsyncStorage.getItem("@serratec:usuario");
      setUsuario(JSON.parse('usuario2'));
    }
    loadData();
  }, []);
  useEffect(() => {
    async function buscarCarros() {
      try {
        const response = await api.get('/produtos')
        setProdutos(response.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    buscarCarros();
}, [usuario]);

    return(
    <>
    <HeaderTitle />
    <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent/>
       
        <ProdList
          data={produtos}
          keyExtractor={Item => String(Item.id)}
          renderItem={({ item }) =>
            <Produtos data={item} />}>
         </ProdList>
      </Container>
     </>
    );
  }
  const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
    },
  });