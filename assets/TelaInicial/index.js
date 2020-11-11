import React from 'react';
import Header from './Header/index'
import Footer from './Footer/index'
import { Container, CustomButton, ButtonText } from './styles';


export default function TelaInicial({navigation}) {
    return (
    <>
        <Container>
          <Header />
            <CustomButton
            onPress={() => {
              navigation.navigate('Calculos')
            }}>
              <ButtonText>Vamos começar?</ButtonText>
            </CustomButton>  
          <Footer />
        </Container>
    </>
    );
}
