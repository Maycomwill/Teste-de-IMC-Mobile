import React from 'react';
import Svg, { Path } from 'react-native-svg';
import {Container, 
        Header, 
        LogoNat, 
        Body,
        Titulo,
        SubTitulo1,
        SubTitulo2,
        SubTitulo3, 
        Botao, 
        CustomButton, 
        ButtonText, 
        Footer, 
        Icone, 
        Creditos } from './styles';
import logo from '../logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TelaInicial({navigation}) {
    return (
    <>
      <Container>
        <Header>
          <LogoNat source={logo} />
        </Header>
          <Body style={{elevation: 10,}}>
            <Titulo>Teste do IMC</Titulo>
            <SubTitulo1>Cuidar da sua saúde é de extrema importância.</SubTitulo1>
            <SubTitulo2>E seu IMC pode ajudar bastante neste quesito.</SubTitulo2>
            <SubTitulo3>Você só precisa nos dizer a sua altura e seu peso atual.</SubTitulo3>
            <CustomButton 
              style={{elevation: 2.5,}}
              onPress={() => {
                navigation.navigate('Calculos')
              }}>
                <ButtonText>Vamos começar?</ButtonText>
            </CustomButton>
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
