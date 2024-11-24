import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { Titulo } from '../componentes/Titulo';



export default function Perfil(){
    return (
       <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color={'blue.500'}>Meu Perfil</Titulo>

                <Avatar size='xl' source={{ uri: "https://github.com/kemuelkesley.png" }} mt={5}/>
                {/* <Avatar size='xl' source={{ uri: "https://i.pinimg.com/736x/05/7e/81/057e81e5e6a1e22f42a69539e733fbf5.jpg"}} mt={5}/>   */}

                <Titulo color={'blue.500'}>Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Daniel dos Santos</Titulo>
                <Text>20/08/1999</Text>
                <Text>Maceio - AL</Text>

                <Divider mt={5}/>

                <Titulo color={'blue.500'} mb={1}>Historico médico</Titulo>
                <Text>1-Bronquite</Text>
                <Text>2-Sinusite</Text>
                

            </VStack>
       </ScrollView>
    )
}