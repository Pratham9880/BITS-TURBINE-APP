import React, { useState, useEffect } from "react";
import { StatusBar, Animated, Easing } from "react-native"; // Import Animated and Easing
import { ScrollView, View, Text, Image } from "react-native";
import { Colors } from '../Components/styles';
import {
    InnerContainer2,
    PageTitle,
    SubTitle,
    StyledForArea,
    StyledButton,
    ButtonText,
    Avatar,
    WelcomeContainer2,
    WelcomeImage,
    WelcomePVselect,
    WelcomeImage2
} from '../Components/styles';

const Plant2 = ({ navigation }) => {
    const [fadeIn] = useState(new Animated.Value(0)); // Initialize fade-in animation value

    useEffect(() => {
        // Run the fade-in animation when the component mounts
        Animated.timing(fadeIn, {
            toValue: 1, // Fade to fully opaque
            duration: 1000, // Animation duration (in milliseconds)
            easing: Easing.linear, // Use linear easing
            useNativeDriver: true // Enable native driver for better performance
        }).start(); // Start the animation
    }, []); // Run only once when component mounts

    // Function to create animated style based on fade-in animation value
    const animatedStyle = {
        opacity: fadeIn // Animate opacity based on fade-in animation value
    };

    // Function to render each image with a fade-in animation
    const renderImageWithFadeIn = (source, title) => {
        return (
            <Animated.View style={[{ opacity: 0 }, animatedStyle]}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, alignSelf: 'center', marginBottom: 5 }}>{title}</Text>
                    <Image
                        style={{ width: '100%', height: 200 }}
                        resizeMode="cover"
                        source={source}
                    />
                </View>
            </Animated.View>
        );
    };

    return (
        <InnerContainer2>
            <StatusBar style="light" />
            <ScrollView>
                <PageTitle>Wind Turbine App</PageTitle>
                <SubTitle></SubTitle>
                {renderImageWithFadeIn(require('./../assets/img/Mill1.jpg'), 'Wind Mill Picture')}
                {renderImageWithFadeIn(require('./../assets/img/lab.jpg'), 'Renewable Energy System Lab')}
                {renderImageWithFadeIn(require('./../assets/img/inlab.jpg'), 'Monitoring System')}
                {renderImageWithFadeIn(require('./../assets/img/Windmill.jpg'), 'Archimedes Wind Turbine')}
                {renderImageWithFadeIn(require('./../assets/img/system.jpg'), 'System')}
            </ScrollView>
        </InnerContainer2>
    );
}

export default Plant2;
