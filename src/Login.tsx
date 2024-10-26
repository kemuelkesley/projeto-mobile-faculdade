import React, { useState } from 'react';
import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Alert } from 'native-base';
import Hospital from './assets/Hospital.png';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleLogin = () => {
    // Verifica se os campos estão vazios
    if (email.trim() === '' || senha.trim() === '') {
      setShowErrorAlert(true); 
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
      return;
    }

    // Verifica credenciais
    if (email === 'admin' && senha === '123456') {
      navigation.navigate('Tabs');
    } else {
      setShowErrorAlert(true); // Exibe o alerta estilizado
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000); // Fecha o alerta após 3 segundos
    }
  };

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Hospital} width={180} alt="Logo Hospital" />

      {/* Componente */}
      <Titulo>
        Faça login em sua Conta
      </Titulo>

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>
            E-mail
          </FormControl.Label>
          <Input
            placeholder='Insira seu endereço de email'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
            value={email}
            onChangeText={(text) => setEmail(text)}  // Armazena o valor no estado
          />
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder='Insira sua senha'
            type='password'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}  // Armazena o valor no estado
          />
        </FormControl>
      </Box>

      <Button
        w="100%"
        bg="blue.800"
        mt={5}
        borderRadius="lg"
        onPress={handleLogin}  // Verifica o login e a senha
      >
        Entrar
      </Button>

      <Link href='https://github.com/kemuelkesley' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem Cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>

      {/* Alerta estilizado */}
      {showErrorAlert && (
        <Alert w="100%" status="error" colorScheme="blue" mt={4}>
          <VStack space={1} flexShrink={1} w="100%" alignItems="center">
            <Alert.Icon size="md" />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              {email.trim() === '' || senha.trim() === '' ? 'Os campos devem ser preenchidos.' : 'Login ou senha incorretos.'}
            </Text>
          </VStack>
        </Alert>
      )}
    </VStack>
  );
}
