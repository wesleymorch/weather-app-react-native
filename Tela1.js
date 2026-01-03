// Importa o módulo StyleSheet do React Native para aplicar estilos
import { StyleSheet } from 'react-native';
// Importa o StatusBar da Expo
import { StatusBar } from 'expo-status-bar';
// Importa os hooks React para estado e efeito
import React, { useState, useEffect } from 'react';
// Importa os componentes usados na interface
import { Text, View, Button, ActivityIndicator, TextInput } from 'react-native';
// Importa o componente de vídeo da Expo
import { Video } from 'expo-av';
// Importa o estilo customizado
import estilo from './estilo';

// Componente principal da tela 1
export default function Tela1({ navigation }) {
  // Estado para armazenar os dados climáticos (inicialmente nulo)
  const [dados, setDados] = useState(null);
  // Estado para indicar se está carregando
  const [loading, setLoading] = useState(false);
  // Estado para armazenar o nome da cidade digitada
  const [cidade, setCidade] = useState("");

  // Retorno da interface
  return (
    <View style={estilo.container}>
      {/* Vídeo de fundo cobrindo a tela inteira */}
      <Video
        source={require('./videos/video.mp4')}
        rate={2.5} // Velocidade de reprodução
        isMuted={true} // Sem som
        resizeMode="cover" // Cobre toda a área
        shouldPlay // Começa automaticamente
        isLooping // Repetição infinita
        style={{ ...StyleSheet.absoluteFill }} // Ocupa toda a tela
      />

      {/* Camada escura por cima do vídeo para melhorar a leitura */}
      <View style={estilo.overlay}>
        <Text style={estilo.title}>CLIMAPP 🌡️</Text>
        <Text style={estilo.label}>DIGITE A CIDADE  🏙️</Text>

        {/* Campo de entrada para digitar o nome da cidade */}
        <TextInput
          style={estilo.input}
          placeholder="EX: LAGES, SAO-PAULO, RIO-DE-JANEIRO"
          value={cidade}
          onChangeText={(cidade) => setCidade(cidade)}
          placeholderTextColor="white"
        />

        {/* Botão para navegar para a Tela2, passando a cidade como parâmetro */}
        <Button
          title="GERAR FRASE DINÂMICA"
          onPress={() => navigation.navigate('Tela2', { cidade })}
          color="black"
        />

        {/* Barra de status da Expo */}
        <StatusBar style="dark" />
      </View>
    </View>
  );
}
