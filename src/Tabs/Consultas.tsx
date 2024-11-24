import { VStack, Divider, ScrollView } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";


export default function Consultas(){
    return (
        <ScrollView p="5">
            <Titulo color="blue.500" >Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar Nova Consulta</Botao>
            
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta 
                nome='Dr. Andre'
                especialidade="Cardiologista"
                foto="https://i.pinimg.com/736x/05/7e/81/057e81e5e6a1e22f42a69539e733fbf5.jpg"
                data="20/11/2024"

                // se comentar as duas variaveis vai aparecer o botão de agendar
                foiAgendado
                
            />

            <Divider mt={5} />

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas Passadas</Titulo>
            <CardConsulta 
                nome='Dr. Andre'
                especialidade="Cardiologista"
                foto="https://i.pinimg.com/736x/05/7e/81/057e81e5e6a1e22f42a69539e733fbf5.jpg"
                data="20/11/2024"

                // se comentar as duas variaveis vai aparecer o botão de agendar
               
                foiAtendido
            />
            <CardConsulta 
                nome='Dr. Andre'
                especialidade="Cardiologista"
                foto="https://i.pinimg.com/736x/05/7e/81/057e81e5e6a1e22f42a69539e733fbf5.jpg"
                data="20/11/2024"

                // se comentar as duas variaveis vai aparecer o botão de agendar
               
                foiAtendido
            />
            <CardConsulta 
                nome='Dr. Andre'
                especialidade="Cardiologista"
                foto="https://i.pinimg.com/736x/05/7e/81/057e81e5e6a1e22f42a69539e733fbf5.jpg"
                data="20/11/2024"

                // se comentar as duas variaveis vai aparecer o botão de agendar
               
                foiAtendido
            />
           
        </ScrollView>
    )
}