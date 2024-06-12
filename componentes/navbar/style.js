import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    
  nav: {
    backgroundColor: '#ffffff',
    borderRadius: 14 ,
    marginTop: 14,
    width: '70%',
    height: 40,
    alignItems:'center',
    justifyContent:'space-between', 
    flexDirection: 'row',
    padding: 15,
    position: 'absolute',
    justifyContent:'center',
    zIndex: 1,

  },
  logo: {
    width: 150,
    height: 150,
    display: 'flex',
  },

})

export default estilo;