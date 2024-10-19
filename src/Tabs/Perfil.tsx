import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { Titulo } from '../componentes/Titulo';


export default function Perfil(){
    return (
       <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color={'blue.500'}>Meu Perfil</Titulo>

                <Avatar size='xl' source={{ uri: "https://github.com/kemuelkesley.png" }} mt={5}/>

                <Titulo color={'blue.500'}>Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Kemuel Kesley</Titulo>
                <Text>20/08/1999</Text>
                <Text>Maceio</Text>

                <Divider mt={5}/>

                <Titulo color={'blue.500'} mb={1}>Historico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
                

            </VStack>
       </ScrollView>
    )
}