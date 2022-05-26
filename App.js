import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
	async function carregaCep(){
		const response = await Api.get('ws/'+inputCep+'/json/');
		setCep(response.data);
	} 
	
	
  return (
    <View style={styles.container}>
  <View style={styles.bloco}>
   <Text style={styles.texto}>Informe seu Cep</Text>
   <TextInput
       style={styles.Input}
       placeholder="Ex: 11750000"
	   onChangeText={(data)=>setInputCep(data)}
	  />
	   
   <TouchableOpacity style={styles.botao} 
	   onPress={carregaCep}>
       <Text style={styles.textoBotao}>Buscar</Text>
   </TouchableOpacity>
	   
  </View>
	   <Cep data={cep}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	  color:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	bloco:{
		width:'100%'
	},
	input:{
		width:'80%',
		marginLeft:'10%',
		fontSize:20,
	},
  texto:{
		fontSize:20,
	  	textAlign:'center',
	},
	botao:{
		width:'80%',
		marginLeft:'10%',
	},
	textoBotao:{
		fontSize:20,
	  	textAlign:'center',
	},
});
