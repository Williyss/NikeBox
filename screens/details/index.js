import { ScrollView, StatusBar, View, StyleSheet, Text, Image } from 'react-native';
import React, { useRef } from 'react';
import estilo from './style'
import NavBar from '../../componentes/navbar';
import Card from '../../componentes/card';
import data from '../../data';
import { useRoute } from '@react-navigation/native';

export default function Home() {
  const scrollViewRef = useRef();
  const route = useRoute()

  const handleLogoPress = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
       <View style={estilo.card}>
        <Image style={estilo.imagem} source={route.params.imagem} resizeMode="contain"/>
         <View style={estilo.conteudoNome}>
          <Text style={estilo.nome}>{route.params.nome}</Text>
        </View>
        <View style={estilo.conteudo}>
          <Text style={estilo.texto}>Preço: {route.params.preco}</Text>
          <Text style={estilo.texto}>Quantidade :{route.params.quantidade}</Text>
          <Text style={estilo.texto}>Cor: {route.params.cor}</Text>
          <Text style={estilo.texto}>Tamanho: {route.params.tamanho}</Text>
          <Text style={estilo.texto}>Marca: {route.params.marca}</Text>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  cardsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',     
    justifyContent: 'center',
    marginTop: 30,
  },
});
