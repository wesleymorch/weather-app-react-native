// Importações
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import estilo from './estilo';
import { Video } from 'expo-av';

// Componente principal
export default function Tela3({ route, navigation }) {
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const { dados, nomeCidade } = route.params; // Recebe dados e nome da cidade

  return (
    <View style={estilo.container}>
      {/* Vídeo de fundo */}
      <Video
        source={require('./videos/fundo1.mp4')}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        dados && (
          <View>
            {/* Bloco com informações técnicas */}
            <View style={estilo.resultado}>
              <Text style={estilo.titulo}>INFORMAÇÕES DE {nomeCidade}</Text>
              <Text style={estilo.text}>LATITUDE: {dados.lat} 📍</Text>
              <Text style={estilo.text}>LONGITUDE: {dados.lon} 🌐</Text>
              <Text style={estilo.text}>RESUMO: {dados.current.summary}</Text>
              <Text style={estilo.text}>TEMPERATURA: {dados.current.temperature}°C 🌡️</Text>
              <Text style={estilo.text}>VENTO: {dados.current.wind.speed} KM/H 💨</Text>
              <Text style={estilo.text}>DIREÇÃO: {dados.current.wind.dir} 💨</Text>
              <Text style={estilo.text}>PRECIPITAÇÃO DE CHUVA: {dados.current.precipitation.total}% ⛈️</Text>
            </View>

            {/* Botões de navegação */}
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginBottom: 10,
                  
                }}onPress={() => navigation.navigate('Tela4', { dados: dados, nomeCidade: nomeCidade })}>
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
                  SOBRE MIM
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                }}
                onPress={() =>
                  navigation.navigate('Tela2', { cidade: nomeCidade })
                }>
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
                  VOLTAR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </View>
  );
}
