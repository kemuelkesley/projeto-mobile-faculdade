import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import Hospital from './assets/Hospital.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';


export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center"  p={5}>
      <Image source={Hospital} alt="Logo Voll" />
      
       {/* Componente */}
      <Titulo>
        Faça login em sua Conta
      </Titulo>   

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input placeholder='Insira seu endereço de email'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          />
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Insira sua senha'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          />
        </FormControl>
      </Box>
      
      <Button
        w="100%"
        bg="blue.800"
        mt={5}
        borderRadius="lg"  
      >
          Entrar
      </Button>

      <Link href='https://www.alura.com.br' mt={2}>
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
    </VStack>
  );
}

