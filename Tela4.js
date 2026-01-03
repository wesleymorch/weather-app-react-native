// IMPORTA O STYLE SHEET DO REACT-NATIVE PARA ESTILIZAÇÃO (NÃO ESTÁ SENDO USADO DIRETAMENTE AQUI)
import { StyleSheet } from 'react-native';

// IMPORTA O REACT PARA PODER USAR JSX E COMPONENTES FUNCIONAIS
import React from 'react';

// IMPORTA COMPONENTES DA BIBLIOTECA REACT-NATIVE
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

// IMPORTA UM ARQUIVO DE ESTILO EXTERNO (PROVAVELMENTE CONTÉM O style.container USADO ABAIXO)
import estilo from './estilo';

// EXPORTA A FUNÇÃO DO COMPONENTE FUNCIONAL `Tela4`
export default function Tela4({ route, navigation }) {

  // OBTÉM OS PARÂMETROS PASSADOS PELA ROTA ANTERIOR: DADOS E O NOME DA CIDADE
  const { dados, nomeCidade } = route.params;

  // RETORNA A INTERFACE GRÁFICA DA TELA
  return (
    // USA UMA IMAGEM DE FUNDO PARA TODA A TELA
    <ImageBackground
      source={require('./imagens/download.jpg')} // IMAGEM DE FUNDO LOCAL
      style={estilo.container} // ESTILO DEFINIDO EXTERNAMENTE
      resizeMode="cover" // MODO DE REDIMENSIONAMENTO DA IMAGEM (COBRE TUDO)
    >

      {/* VIEW CENTRAL QUE FICA POR CIMA DA IMAGEM, COM UM FUNDO ESCURECIDO */}
      <View style={{
        flex: 1, // OCUPA TODO O ESPAÇO DISPONÍVEL
        justifyContent: 'center', // CENTRALIZA VERTICALMENTE
        alignItems: 'center', // CENTRALIZA HORIZONTALMENTE
        padding: 20, // ESPAÇAMENTO INTERNO
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // FUNDO PRETO TRANSLÚCIDO
      }}>

        {/* TÍTULO DO APLICATIVO */}
        <Text style={{
          fontSize: 28, // TAMANHO DA FONTE
          fontWeight: 'bold', // NEGRITO
          color: 'white', // COR BRANCA
          marginBottom: 30, // MARGEM INFERIOR
          fontFamily: 'fantasy', // FONTE FANTASIA (DECORATIVA)
          textAlign: 'center' // CENTRALIZADO
        }}>
          SOBRE O CLIMAPP
        </Text>

        {/* PARÁGRAFO EXPLICANDO O OBJETIVO DO APP */}
        <Text style={{
          fontSize: 16,
          color: 'white',
          textAlign: 'center',
          fontFamily: 'fantasy',
          marginBottom: 30,
        }}>
          O CLIMAPP É UM APLICATIVO DESENVOLVIDO PARA AJUDAR USUÁRIOS A CONSULTAREM A PREVISÃO DO TEMPO DE FORMA RÁPIDA E DIVERTIDA.
          ALÉM DE EXIBIR INFORMAÇÕES TÉCNICAS COMO TEMPERATURA, VENTO E PRECIPITAÇÃO, ELE TAMBÉM GERA MENSAGENS DINÂMICAS COM BASE NO CLIMA DA CIDADE INFORMADA.
        </Text>

        {/* CRÉDITO AO DESENVOLVEDOR */}
        <Text style={{
          fontSize: 15,
          color: 'white',
          fontStyle: 'italic', // ESTILO ITÁLICO
          marginBottom: 40,
          fontFamily: 'fantasy',
        }}>
          DESENVOLVIDO POR WESLEY CARLOS MORCH DE JESUS
        </Text>

        {/* BOTÃO PARA VOLTAR À TELA ANTERIOR (TELA3) */}
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 20, // BORDAS ARREDONDADAS
          }}
          onPress={() => navigation.navigate('Tela3', { dados: dados, nomeCidade: nomeCidade })}
        >
          {/* TEXTO DENTRO DO BOTÃO */}
          <Text style={{ color: 'white', fontSize: 16 }}>
            VOLTAR
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
