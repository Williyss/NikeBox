import { View, Image, TouchableOpacity } from 'react-native';
import estilo from './style';

export default function NavBar({ onLogoPress }) {
  return (
    <View style={estilo.nav}>
      <TouchableOpacity onPress={onLogoPress}>
        <Image style={estilo.logo} source='https://i.pinimg.com/originals/f0/42/59/f04259cc02c4ea69dafb3e0ce9089234.png'/>
      </TouchableOpacity>
    </View>
  );
}
