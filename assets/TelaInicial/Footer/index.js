import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Creditos, Icone } from '../Footer/styles';

export default function Footer(){
    return(
        <Container>
            <Creditos>Criado por Maycom Willams</Creditos>
            <Icone>
                <Icon name="copyright" size={20} color="#fff" />
            </Icone>
        </Container>
    )
};