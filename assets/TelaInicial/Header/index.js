import React from 'react';

import { Container, LogoNat, Titulo, SubTitulo1, SubTitulo2, SubTitulo3, CustomButton, TextoBotao } from './styles';
import logo from '../../logo.png'

export default function Header(){
    return(
        <Container>
            <LogoNat source={logo} />
            <Titulo>Teste do IMC</Titulo>
            <SubTitulo1>Cuidar da sua saúde é de extrema importância.</SubTitulo1>
            <SubTitulo2>E seu IMC pode ajudar bastante neste quesito.</SubTitulo2>
            <SubTitulo3>Você só precisa nos dizer a sua altura e seu peso atual.</SubTitulo3>
            <CustomButton>
                <TextoBotao>Vamos começar?</TextoBotao>
            </CustomButton>
        </Container>

    );

}
