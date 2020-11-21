import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #f7dede;

`;

export const Head = styled.View`
    flex: 1;
    align-items: center;
    padding: 50px 0 30px;
    background-color: #f7dede;

`;

export const Body = styled.View`
    border-top-right-radius: 90px;
    background: #fff;
    justify-content: center;
    align-items: center;
    flex: 3;

`;

export const LogoNat = styled.Image`
    margin: 10px 0 10px;
    align-self: center;
    max-width: 300px;
    max-height: 156px;
`;

export const Texto = styled.Text`
    color: #636363;;
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: bold;
    padding-top: 175px;
`;

export const Texto2 = styled.Text`
    color: #636363;
    font-size: 24px;
    margin-bottom: 30px;
`;

export const Texto3 = styled.Text`
    color: #636363;
    font-size: 24px;
    margin-bottom: 30px;
`;

export const AlturaInput = styled.TextInput.attrs({
    placeholderTextColor: "#000"
  })`
    background-color: rgba(180, 180, 180, 0.3);
    color: #000;
    border-radius: 10px;
    width: 260px;
    height: 40px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 16px;
`;

export const PesoInput = styled.TextInput.attrs({
    placeholderTextColor: "#000"
  })`
    background-color: rgba(180, 180, 180, 0.3);
    color: #000;
    border-radius: 10px;
    width: 260px;
    height: 40px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 16px;
`;

export const CustomButton = styled.TouchableOpacity`
    background: #a62300;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 85px;
    margin: 30px 50px 150px; 
    
`;

export const ButtonText = styled.Text`
    color:  white;
    font-weight: bold;
    font-size: 30px;
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