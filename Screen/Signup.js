// 4) Signup code
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


//DatetimePicker
import DateTimePicker from '@react-native-community/datetimepicker';
import { onChildAdded } from "firebase/database";

const Signup = ({navigation }) => {
    const [error, setError] = useState(null);
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] =useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    const handleSignup = async (values) => {
        const { fullName, email, dateOfBirth, password } = values;
        try {
            // Create user with email and password
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            // Add user data to Firebase Realtime Database
            const userId = firebase.auth().currentUser.uid; // Get the user ID
            await firebase.database().ref('users/' + userId).set({
                fullName,
                email,
                dateOfBirth,
            });
            // Navigate to login screen after successful signup
            navigation.navigate("Login");
        } catch (error) {
            setError(error.message);
        }
    };
    //Actual date of birth to be sent
    const [dob, setDob] = useState();

    const onChange =(event,selectedDate)=>{
        const currentdate =selectedDate|| date;
        setShow(false);
        setDate(currentdate);
        setDob (currentdate);
    }

    const showDatePicker =(event,selectedDate)=>{
        setShow(true);
    }



    return (
        <StyledContainer style={{ backgroundColor: '#FEDBD0' }}>
                <StatusBar style="dark" />
            <ScrollView>
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/turbine1.jpg')} />
                    <PageTitle>Wind Turbine App</PageTitle>
                    <SubTitle>Signup</SubTitle>

                    {show && (
                        <DateTimePicker
                        testID="dateTiemPicker"
                        value={date}
                        mode='date'
                        is24Hours={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}

                    <Formik
                        initialValues={{ fullName:"", email: "",dateOfBirth:"", password: "" ,confirmPassword:""}}
                        onSubmit={(values) => {
                            console.log(values);
                            navigation.navigate("Login");
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledForArea>
                                <MyTextInput
                                    label="Full Name"
                                    icon="person"
                                    placeholder="Enter your Name"                                    
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                />

                                <MyTextInput
                                    label="Email"
                                    icon="mail"
                                    placeholder="Enter your email"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />

                                <MyTextInput
                                    label="Date of Birth"
                                    icon="calendar"
                                    placeholder="Select you Date of Birth"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('dateOfBirth')}
                                    onBlur={handleBlur('dateOfBirth')}
                                    value={dob ? dob.toDateString():''}
                                    isDate={true}
                                    editable={false}
                                    showDatePicker={showDatePicker}
                                />

                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="Enter your Password"
                                    placeholderTextColor={darkLight}
                                    secureTextEntry={hidePassword}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    isPassword={true}
                                    setHidePassword={setHidePassword}
                                    hidePassword={hidePassword}
                                />

                                <MyTextInput
                                    label="Confirm Password"
                                    icon="lock"
                                    placeholder="Enter your Password"
                                    placeholderTextColor={darkLight}
                                    secureTextEntry={hidePassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.password}
                                    isPassword={true}
                                    setHidePassword={setHidePassword}
                                    hidePassword={hidePassword}
                                />

                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                                <Line />


                                <ExtraView>
                                    <ExtraText>Already have an account?</ExtraText>
                                    <TextLink onPress={() => navigation.navigate("Login")}>
                                        <TextLinkContent>Login</TextLinkContent>
                                    </TextLink>
                                </ExtraView>


                            </StyledForArea>
                        )}
                    </Formik>

                </InnerContainer>
                {error && <Text>{error}</Text>}
            </ScrollView>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, isPassword, icon, hidePassword, setHidePassword, isDate,showDatePicker,...props }) => {
    
    
    
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={EvGreen} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate&& <StyledTextInput{...props}/>}
            {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
                
                <StyledTextInput{...props}/>
            </TouchableOpacity>)}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={EvGreen} />
                </RightIcon>
            )}
        </View>
    )
}
export default Signup;
