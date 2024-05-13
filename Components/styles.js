import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Constants } from "expo-constants";
import styled from "styled-components/native";

const statusBarHeight = Constants?.statusBarHeight || 0; // Handle undefined property

// Colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darklight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#43B143",
    EvGreen: "#89cf32",
    red: "#EF4444",
    black: "#000000",
    lightGrey: "#D3D3D3",
    Grey: "#808080",
    Blue: "#0000FF",
    Yellow: "#FFFF00",
    LightBlue: "#ADD8E6", // Adding Light Blue color
};

const { primary, secondary, tertiary, darklight, brand, green, red, black, EvGreen, LightBlue, Blue } = Colors;

export const StyledContainer = styled(View)`
    flex: 1;
    padding: 25px;
    padding-top: ${statusBarHeight + 0}px;
    background-color: ${primary};
`;

export const Container = styled(View)`
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
`;

export const InnerContainer = styled(View)`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding:30px;
    justify-content:center;
    margin-top: -100px;
`;

export const InnerContainer2 = styled(View)`

    width: 100%;
    align-items: center;
`;

export const WelcomeContainer2 = styled(InnerContainer2)`
    padding:30px;
    justify-content:center;
    margin-top: -50px;
`;

export const InnerContainer3 = styled(View)`

    width: 100%;
    align-items: center;
`;

export const WelcomeContainer3 = styled(InnerContainer3)`
    padding:30px;
    justify-content:center;
    margin-top: -60px;
`;

export const PageLogo = styled(Image)`
    width: 190px;
    height: 190px;
    
`;

export const Avatar = styled(Image)`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius:50px;
    border-width:2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled(Image)`
    width: 190px;
    height: 190px;
    align-self: center;
    margin-top: 50px;
    justify-content: center;
`;

export const WelcomeImage2 = styled(Image)`
    width: 190px;
    height: 190px;
    align-self: center;
    margin-top: 40px;
    justify-content: center;
`;

export const PageTitle = styled(Text)`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: ${black};
    padding: 10px;

    ${(props) => props.Welcome == true && `
    margin-top: 5px;
    font-weight:normal;
`}

`;

export const SubTitle = styled(Text)`
    font-size: 25px;
    text-align: center;
    color: ${black};
    padding: 10px;
    margin-top: 5px;
`;

export const SubsubTitle = styled(Text)`
    font-size: 20px;
    text-align: center;
    color: ${black};
    padding: 10px;
    margin-top: 5px;
`;

export const StyledForArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled(TextInput)`
    background-color: ${secondary};
    padding: 15px;
    padding-right: 55px;
    padding-left: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
    color: ${Blue}; /* Changed from LightBlue to Blue */
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
    color: ${Blue}; /* Changed from LightBlue to Blue */
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;    
    background-color: ${Blue}; /* Changed from LightBlue to Blue */
    justify-content:center;
    align-items: center; 
    border-radius: 5px;
    margin-vertical: 5px;
    height:60px;

    ${(props) => props.google == true && `
        background-color:${brand};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google && `
        padding: 0 25px; 
    `}
`;

export const button = styled.Text`
backgroundColor: 'blue',
paddingVertical: 15,
paddingHorizontal: 30,
borderRadius: 5,
marginTop: 10
`;

export const MsgBox = styled.Text`
    text-align:center;
    font-size: 13px;
`;

export const listbox = styled.Text`
maxHeight: 200
`;

export const listItem = styled.Text`
background-color: ${EvGreen};
paddingVertical: 10;
paddingHorizontal: 20;
marginBottom: 10;
borderRadius: 5;
borderWidth: 1.
borderColor: Colors.grey
`;

export const selectedListItem = styled.Text`
backgroundColor: 'transparent'
`;

export const Line = styled.View`
    height: 1px;
    weight: 100%;
    margin-top: 5px;
    margin-bottom:5px;
    background-color:${darklight};
    margine-vertical:10px;
`;

export const ExtraView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:10px;
`;

export const ExtraText = styled.Text`
    color:${tertiary};
    justify-content: center;
    align-items: center;
    font-size:15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color:${brand};
    font-size: 15px;

`;

export const Map = styled.Text`
width:100%
height:100%

`;

export const DropdownButton = styled.TouchableOpacity`
background-color: ${EvGreen};
    padding-vertical: 10px;
    padding-horizontal: 20px;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${primary};
    margin-bottom: 10px;
`;

export const DropdownIcon = styled.View`
    position: absolute;
    right: 10px;
`;

export const DropdownList = styled.ScrollView`
    max-height: 150px;
    border-width: 1px;
    border-color: ${primary};
    border-radius: 5px;
    background-color: ${EvGreen};
`;

export const DropdownItem = styled.TouchableOpacity`
    padding-vertical: 10px;
    padding-horizontal: 20px;
`;

export const WelcomePVselect = styled(View)`
    flex: 1;
    width: 100%;
    align-items: center;
    padding:25px;

    justify-content:center

`;
