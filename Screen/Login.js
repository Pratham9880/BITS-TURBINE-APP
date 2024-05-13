// 3) Login code
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

// Formik
import { Formik } from 'formik';
import { View, TouchableOpacity } from 'react-native';

//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';


//colours
import { Colors } from './../Components/styles';

// Styled components
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledForArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from './../Components/styles';
import { useState } from "react";

//colors
const { EvGreen, darkLight, primary } = Colors;
//keybordavodind wraper

import KeyboardAvoidingWrapper from "../Components/KeyboardAvoidingWrapper";


//const handleSignup = () => {
//    navigation.navigate('Signup'); // Navigate to the Signup screen
//};

const Login = ({navigation }) => {
    const [error, setError] = useState(null);
    const [hidePassword, setHidePassword] = useState(true);
    const handleLogin = async (values) => {
        const { email, password } = values;
        try {
            // Authenticate user with email and password
            await firebase.auth().signInWithEmailAndPassword(email, password);
            // Navigate to welcome screen after successful login
            navigation.navigate("Welcome");
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer style={{ backgroundColor: '#FEDBD0' }}>
                <StatusBar style="dark" />

                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/turbine1.jpg')} />
                    <PageTitle>Wind Turbine App</PageTitle>
                    <SubTitle>Account Login</SubTitle>

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => {
                            console.log(values);
                            navigation.navigate("Welcome");
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledForArea>
                                <MyTextInput
                                    label="Email"
                                    icon="mail"
                                    placeholder="Enter your email"
                                    keyboardType="email-address"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="Enter your password"
                                    placeholderTextColor={darkLight}
                                    secureTextEntry={hidePassword}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    isPassword={true}
                                    setHidePassword={setHidePassword}
                                    hidePassword={hidePassword}
                                />
                                <MsgBox>{error && <Text>{error}</Text>}</MsgBox>
                                
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                                <Line />
                                <StyledButton google={true} onPress={handleSubmit}>
                                    <Fontisto name="google" color={primary} size={25} />
                                    <ButtonText google={true}>Sign in With Google</ButtonText>
                                </StyledButton >

                                <ExtraView>
                                    <ExtraText>Don't have an account already?</ExtraText>
                                    <TextLink onPress={() => navigation.navigate("Signup")}>
                                        <TextLinkContent>Signup</TextLinkContent>
                                    </TextLink>
                                </ExtraView>


                            </StyledForArea>
                        )}
                    </Formik>

                </InnerContainer>

            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({ label, isPassword, icon, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={EvGreen} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={EvGreen} />
                </RightIcon>
            )}
        </View>
    )
}
export default Login;
