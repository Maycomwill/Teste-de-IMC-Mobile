import React from 'react';
import logo from '../../assets/logo.png'
import { Container,
         Head,
         LogoNat,
         Body,
         Classificacao,
         Disclaimer,
         CustomButton,
         ButtonText,
         Footer,
         Creditos,
         Icone,
         Resultado,
         Butaonessa } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TelaResultados({route, navigation}) {
    const conta = route.params.conta;
    console.log({conta})

    return (
    <>
        <Container>
            <Head>
                <LogoNat source={logo}/>
            </Head>
            <Body style={{elevation: 10,}}>
            <Resultado>O seu IMC é: {conta}</Resultado>
            <Classificacao>Seu IMC está dentro da faixa de classificação: </Classificacao>
                <Butaonessa>
                <Disclaimer>
                    A informação do IMC é apenas um demonstrativo de valor, procure um(a) nutricionista para mais informações sobre sua saúde.
                </Disclaimer>
                <CustomButton 
                    style={{elevation: 2.5,}}
                    onPress={() => {navigation.navigate('Home')}}>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </CustomButton>
                </Butaonessa>
            </Body>
            <Footer style={{elevation: 10,}}>
                <Creditos>Criado por Maycom Willams</Creditos>
                <Icone>
                    <Icon name="copyright" size={20} color="#000" />
                </Icone>
          </Footer>
        </Container>
    </>
    );
}
