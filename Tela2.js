// Importações básicas de módulos do React Native
import { StyleSheet } from 'react-native'; // Permite criar estilos para os componentes
import React, { useEffect, useState } from 'react'; // Importa React e dois hooks: useEffect e useState
import { View, Text, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native'; // Componentes de UI
import { StatusBar } from 'expo-status-bar'; // Componente da barra de status do Expo
import { Video } from 'expo-av'; // Componente para exibir vídeos
import estilo from './estilo'; // Importa o arquivo de estilos personalizado

// Função que cria uma frase divertida com base no clima atual
const gerarFraseClima = (data) => {
  if (!data || !data.current) return ''; // Retorna string vazia se os dados forem inválidos

  const temp = data.current.temperature; // Armazena a temperatura atual
  const resumo = data.current.summary.toLowerCase(); // Armazena a descrição do clima (em minúsculo)

  // Verifica condições climáticas específicas e retorna uma frase apropriada
  if (resumo.includes("rain")) {
    return "LEVE SEU GUARDA-CHUVA ☔️ VAI CHOVER!";
  } else if (temp >= 30) {
    return "DIA PERFEITO PARA UM SORVETE 🍦!";
  } else if (temp <= 10) {
    return "TÁ BEM FRIO! NÃO SE ESQUEÇA DO CASACO 🧥";
  } else if (resumo.includes("cloud")) {
    return "O CÉU ESTÁ NUBLADO ☁️ MAS AINDA DÁ PRA SAIR!";
  } else if (resumo.includes("sun") || resumo.includes("clear")) {
    return "SOL BRILHANDO FORTE! 🕶️ APROVEITE!";
  } else {
    return "CONFIRA AS CONDIÇÕES ANTES DE SAIR 😉";
  }
};
// Componente principal da tela 2
export default function Tela2({ route, navigation }) {
  const [loading, setLoading] = useState(false); // Estado para mostrar carregamento
  const [dados, setDados] = useState(null); // Estado para armazenar os dados do clima
  const { cidade } = route.params; // Pega a cidade passada como parâmetro da tela anterior

    // Função que busca os dados da API Meteosource
  const getData = async () => {
    setLoading(true); // Ativa o indicador de carregamento

    if (!cidade?.trim()) { // Verifica se o campo da cidade está vazio
      alert('Erro! Você não digitou o nome da cidade');
      navigation.navigate('Tela1'); // Volta para a tela anterior
      setLoading(false); // Desativa carregamento
      return;
    }

    try {
      // Faz uma requisição para a API com a cidade como parâmetro
      const response = await fetch(
        `https://www.meteosource.com/api/v1/free/point?place_id=${cidade}&sections=current%2Chourly&language=en&units=auto&key=kokdgh2orfbmieykwoslrh37tzjrakhpo38gvz0h`
      );
      const data = await response.json(); // Converte a resposta em JSON

      if (!data.current) { // Verifica se há dados do clima atual
        alert('Erro: dados de clima não encontrados.');
        setDados(null); // Limpa o estado
      } else {
        setDados(data); // Salva os dados no estado
      }
    } catch (error) {
      alert('Erro: ' + error.message); // Mostra erro
      setDados(null); // Limpa os dados
    } finally {
      setLoading(false); // Desativa carregamento
    }
  };
  // Executa getData assim que a tela é carregada ou se a cidade mudar
  useEffect(() => {
    getData();
  }, [cidade]);
  return (
    <View style={estilo.container}> {/* Container principal */}
      
      {/* Vídeo de fundo ocupando a tela toda */}
      <Video
        source={require('./videos/fundo3.mp4')} // Caminho do vídeo
        rate={2.5} // Velocidade do vídeo
        isMuted={true} // Vídeo sem som
        resizeMode="cover" // Preenchimento da tela
        shouldPlay // Começa automaticamente
        isLooping // Repete em loop
        style={{ ...StyleSheet.absoluteFill }} // Ocupa toda a tela
      />
      <View style={{ flex: 1 }}> {/* Área que vai conter o conteúdo */}

        {/* Se estiver carregando, mostra o spinner */}
        {loading ? (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        // Se os dados existirem, mostra os dados na tela
        ) : dados ? (
          <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>

            {/* Nome da cidade no topo */}
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              marginTop: 50,
              fontFamily: 'fantasy'
            }}>
              {cidade}
            </Text>
            {/* Temperatura e frase personalizada do clima */}
            <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
              <Text style={{
                fontSize: 21,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                marginBottom: 10,
                fontFamily: 'fantasy'
              }}>
                TEMPERATURA: {dados.current.temperature}°C 🌡️
              </Text>

              <Text style={{
                fontSize: 21,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                marginBottom: 20,
                fontFamily: 'fantasy'
              }}>
                {gerarFraseClima(dados)} {/* Chama a função para gerar frase */}
              </Text>
              {/* Botão para ir para a tela de detalhes técnicos */}
              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onPress={() =>
                  navigation.navigate('Tela3', { dados: dados, nomeCidade: cidade }) // Passa os dados para Tela3
                }
              >
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
                  VER DETALHES TÉCNICOS
                </Text>
              </TouchableOpacity>
              {/* Botão para voltar para a tela 1 */}
              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onPress={() => navigation.navigate('Tela1')}
              >
                <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
                  VOLTAR
                </Text>
              </TouchableOpacity>
            </View>

            <StatusBar style="auto" /> {/* Controla a aparência da barra de status */}
          </View>
        // Caso não tenha dados e não esteja carregando
        ) : (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Sem dados para exibir.
          </Text>
        )}
      </View>
    </View>
  );
}
