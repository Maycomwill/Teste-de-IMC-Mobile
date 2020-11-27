import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { Container,
         Head,
         LogoNat,
         Body,
         Classificacao,
         Disclaimer,
         Texto1,
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
    const [Classifica, setClassifica] = useState('');

    useEffect(() => {classificacao()}, []);

    function classificacao() {
        if (conta < 16) {
            setClassifica('Magreza grau III');
        } else if (conta >= 16 && conta <= 16.99) {
            setClassifica('Magreza grau II');
        } else if (conta >= 17 && conta <= 18.4) {
            setClassifica('Magreza grau I');
        } else if (conta >= 18.5 && conta <= 24.99) {
            setClassifica('Eutrofia');
        } else if (conta >= 25 && conta <= 29.99) {
            setClassifica('Sobrepeso');
        } else if (conta >= 30 && conta <= 34.99) {
            setClassifica('Obesidade grau I');
        } else if (conta >= 35 && conta <= 39.99) {
            setClassifica('Obesidade grau II');
        } else if (conta > 40) {
            setClassifica('Obesidade grau III');
        } else {
        }
        console.log('Dentro da função')
      }
      
      console.log({Classifica})
    return (
    <>
        <Container>
            <Head>
                <LogoNat source={logo}/>
            </Head>
            <Body style={{elevation: 10,}}>
            <Resultado>O seu IMC é: {conta}</Resultado>
            <Texto1>Seu IMC está dentro da faixa de classificação: </Texto1>
            <Classificacao>{Classifica}</Classificacao>
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
