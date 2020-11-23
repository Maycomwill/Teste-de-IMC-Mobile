import React from 'react';
import {Container,
        Head,
        Body,
        LogoNat,
        Texto,
        Texto2,
        Texto3,
        AlturaInput,
        PesoInput,
        CustomButton,
        ButtonText,
        Footer,
        Creditos,
        Icone } from './styles';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';


const TelaCalculos = ({navigation}) => {
  return <Container>
          <Head>
            <LogoNat source={logo} />
          </Head>
          <Body style={{elevation: 10,}}>
            <Texto>
              Vamos começar.
            </Texto>
              <Texto2>
                Nos informe sua altura
              </Texto2>
                <AlturaInput placeholder="Insira sua altura em metros"
                             keyboardType="number-pad" />
                <Texto3>
                    Nos informe seu peso
                </Texto3>
              <PesoInput keyboardType="number-pad"
                        placeholder="Insira seu peso em Kg" />
            <CustomButton 
              style={{elevation: 2.5,}}
              onPress={() => {navigation.navigate('Resultados')}}>
              <ButtonText>
                Calcular
              </ButtonText>
            </CustomButton>
          </Body>
          <Footer style={{elevation: 10,}}>
            <Creditos>Criado por Maycom Willams</Creditos>
            <Icone>
                <Icon name="copyright" size={20} color="#000" />
            </Icone>
          </Footer>  
        </Container>;
}

export default TelaCalculos;