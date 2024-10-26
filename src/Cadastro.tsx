import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView, Alert } from 'native-base';
import Hospital from './assets/Hospital.png';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro({ navigation }) {
  const [numSecao, setNumSecao] = useState(0);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    } else if (numSecao === secoes.length - 1) {
      setShowSuccessAlert(true); // Exibe o alerta estilizado
      setTimeout(() => {
        setShowSuccessAlert(false);
        navigation.navigate('Login');
      }, 2000);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Hospital} alt="Hospital cliom" alignSelf="center" />

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>

      <Box>
        {secoes[numSecao]?.entradaTexto?.map(entrada => (
          <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
        ))}
      </Box>

      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
          Selecione o plano:
        </Text>
        {secoes[numSecao].checkbox.map(checkbox => (
          <Checkbox key={checkbox.id} value={checkbox.value}>
            {checkbox.value}
          </Checkbox>
        ))}
      </Box>

      {numSecao > 0 && <Botao onPress={voltarSecao} bgColor="gray.400">Voltar</Botao>}
      <Botao onPress={avancarSecao} mt={4} mb={20}>Concluir</Botao>

      {/* Alerta estilizado */}
      {showSuccessAlert && (
        <Alert w="100%" status="success" colorScheme="success" mt={4}>
          <VStack space={1} flexShrink={1} w="100%" alignItems="center">
            <Alert.Icon size="md" />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              Cadastro concluído com sucesso!
            </Text>
          </VStack>
        </Alert>
      )}
    </ScrollView>
  );
}
