import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  card: {
    height: 350,
    marginTop: 25,
    width: 210,
    backgroundColor: '#943EC5',
    borderRadius: 10,
    marginTop: 35
  },
  imagem: {
    marginTop: 20,
    width: '100%',
    height: 150,
    borderRadius: 15,
    backgroundColor:'#FFFFFF'
  },
  container: {
    flexDirection: "row",
    display: 'flex',
    justifyContent: 'space-between', 
    width:'60%',
  },
  conteudoNome: {
    alignItems: 'left'
    
  },
  nome: {
    color: 'white',
    fontSize: 20
  },
  conteudo: {
    marginTop: 10,
  },
  texto: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 10,
    padding: 3,
  }
});

export default estilo;
