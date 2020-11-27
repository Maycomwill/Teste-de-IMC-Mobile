import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #f7dede;
    flex: 1;
`;

export const Header = styled.View`
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

export const Titulo = styled.Text`
    color: #636363;
    font-weight: bold;
    font-size: 26px;
    margin: 0 20px 25px;    
`;

export const SubTitulo1 = styled.Text`
    color: #636363;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 0 20px 10px;
    
`;

export const SubTitulo2 = styled.Text`
    color: #636363;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 0 20px 10px;
    
`;

export const SubTitulo3 = styled.Text`
    color: #636363;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 0 20px 25px;
    
`;

export const CustomButton = styled.TouchableOpacity`
    background: #a62300;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 30px 50px 150px;   
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
    justify-content: flex-start;
    
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