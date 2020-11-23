import React from 'react';
import logo from '../../assets/logo.png'
import { Container, Head, LogoNat, Body, CustomButton, ButtonText, Footer, Creditos, Icone } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function TelaResultados({navigation}) {
    return (
    <>
        <Container>
            <Head>
                <LogoNat source={logo}/>
            </Head>
            <Body style={{elevation: 10,}}>
                <CustomButton 
                    style={{elevation: 2.5,}}
                    onPress={() => {navigation.navigate('Home')}}>
                    <ButtonText>
                        Voltar
                    </ButtonText>
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
