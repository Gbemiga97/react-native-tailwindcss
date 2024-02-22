import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={`flex-1 items-center justify-center bg-black`}>
      <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-lg`}>
      <Text style={tw`text-white text-3xl font-bold`}>Hello World</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


