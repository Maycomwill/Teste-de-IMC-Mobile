import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f7dede;
`;

export const Head = styled.View`
    flex: 1;
    align-items: center;
    padding: 50px 0 30px;
    background-color: #f7dede;
    
`;

export const LogoNat = styled.Image`
    margin: 10px 0 10px;
    align-self: center;
    max-width: 300px;
    max-height: 156px;
`;

export const Body = styled.View`
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background: #fff;
    align-items: center;
    flex:3;
    padding-top: 50px;
`;

export const Resultado = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #636363;
`;

export const Classificacao = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #636363;
    margin: 10px 30px 0px;
    text-align: center;
`;

export const Disclaimer = styled.Text`
    color: rgba(99, 99, 99, 0.25);
    font-size: 12px;
    text-align: center;
    margin: 0 25px 5px;

`;

export const CustomButton = styled.TouchableOpacity`
    align-self: center;
    border-radius: 30px;
    background: #a62300;
    align-items: center;
    justify-content: center;

    height: 50px;
    
`;

export const ButtonText = styled.Text`
    color:  white;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 25px 20px 25px;
    
`;

export const Footer = styled.View`
    height: 100px;
    flex: 0.2;
    background: white;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Creditos = styled.Text`
    margin: 0 100px 0;
    font-weight: bold;
    text-align: center;
    font-size: 12px;
    color: black;
    opacity: 0.1;
`;

export const Icone = styled.View`
    opacity: 0.1;
`;

export const Butaonessa = styled.View`
    flex: 0.95;
    justify-content: flex-end;
`;