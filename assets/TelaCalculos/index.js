import React from 'react';
import {Container,
        LogoNat,
        Texto,
        Texto2,
        Texto3,
        AlturaInput,
        PesoInput,
        CustomButton,
        ButtonText } from './styles';
import logo from '../../assets/logo.png';

// import { Container } from './styles';

const TelaCalculos = ({navigation}) => {
  return <Container>
          <LogoNat source={logo} />
            <Texto>
              Vamos começar.
            </Texto>
              <Texto2>
                Nos informe sua altura
              </Texto2>
                <AlturaInput keyboardType="number-pad">
                  Insira sua altura em metros
                </AlturaInput>
                <Texto3>
                    Nos informe seu peso
                </Texto3>
              <PesoInput keyboardType="number-pad"
                        returnKeyLabel="Use">
                      Insira seu peso em Kg
              </PesoInput>
            <CustomButton onPress={() => {navigation.navigate('Resultados')}}>
              <ButtonText>
                Calcular
              </ButtonText>
            </CustomButton>  
        </Container>;
}

export default TelaCalculos;