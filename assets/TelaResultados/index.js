import React from 'react';
import logo from '../../assets/logo.png'
import { Container, LogoNat, CustomButton, ButtonText } from './styles';


export default function TelaResultados({navigation}) {
    return (
    <>
        <Container>
            <LogoNat source={logo}/>
            <CustomButton onPress={() => {navigation.navigate('Home')}}>
                <ButtonText>
                    Voltar
                </ButtonText>
            </CustomButton>
        </Container>
    </>
    );
}
