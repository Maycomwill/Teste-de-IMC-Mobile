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
    flex: 3;
    background-color: #fff;
    border-top-left-radius: 90px;
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
    box-shadow: 120px 150px 15px rgba(0,0,0,1);
`;

export const CustomButton = styled.TouchableOpacity`
    align-self: center;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    background: #a62300;
    align-items: center;
    justify-content: center;
    margin: 30px 50px 150px;
    width: 150px;
    
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