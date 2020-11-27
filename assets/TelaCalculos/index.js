import React, { useState, useEffect } from 'react';
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
        Resultado,
        Icone } from './styles';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';


const TelaCalculos = ({navigation}) => { 

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState(''); 
  const [conta, setConta] = useState(''); 

  function calculoIMC(){
    const n1 = Number(peso);
    const n2 = Number(altura);
    const resultado = (n1 / (n2 ** 2)).toFixed(2); 
    setConta(resultado)
}
    useEffect(() => {
      if(altura !== '' && peso !==''){
        calculoIMC()
    }
    },[altura, peso]);
   
  console.log({conta});

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
                             keyboardType="number-pad" 
                             onChangeText={(val) => setAltura(val)}/>
                <Texto3>
                    Nos informe seu peso
                </Texto3>
              <PesoInput  keyboardType="number-pad"
                          placeholder="Insira seu peso em Kg"
                          onChangeText={(val) => setPeso(val)} />
            <CustomButton 
              style={{elevation: 2.5,}}
              onPress={() => {navigation.navigate('Resultados', { conta })}}>
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