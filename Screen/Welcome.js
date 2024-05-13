import React, { useState, useEffect } from "react";
import { StatusBar, ScrollView, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {
    InnerContainer3,
    PageTitle,
    SubTitle,
    StyledForArea,
    StyledButton,
    ButtonText,
    WelcomeContainer3,
    WelcomeImage,
    SubsubTitle,
} from './../Components/styles';

const Welcome = ({ navigation }) => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = "b1331d63138cac2db2ae3e9240961412";
    const cityName = "Goa";

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
            const response = await fetch(API);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    // Function to get the appropriate weather icon based on weather condition and temperature
    const getWeatherIcon = () => {
        if (!weatherData) return null;

        const weatherMain = weatherData.weather[0].main.toLowerCase();
        const temperature = weatherData.main.temp;

        if (temperature > 30) {
            return <Ionicons name="sunny-outline" size={100} color="#FFD700" />;
        }
        

        switch (weatherMain) {
            case 'clear':
                return <Ionicons name="sunny" size={100} color="#FFD700" />;
            case 'clouds':
                return <Ionicons name="cloudy-outline" size={100} color="#d3d3d3" />;
            case 'rain':
                return <Ionicons name="rainy-outline" size={100} color="#4682B4" />;
            default:
                return null;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FEEAE6' }}>
            <StatusBar style="light" />
            <ScrollView>
                <InnerContainer3>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ borderWidth: 2, borderColor: 'black', borderRadius: 10, padding: 20, marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Wind Turbine App</Text>
                            <WelcomeImage resizeMode="cover" source={require('./../assets/img/turbine1.jpg')} />
                        </View>
                    </View>

                    <WelcomeContainer3>
                        <PageTitle Welcome={true}></PageTitle>
                        <StyledForArea>
                            <SubsubTitle>Select your Turbine Plants</SubsubTitle>
                            <StyledButton onPress={() => { navigation.navigate("Plant1"); }}>
                                <ButtonText>Plant 1</ButtonText>
                            </StyledButton>
                            <StyledButton onPress={() => { navigation.navigate("Plant2"); }}>
                                <ButtonText>Details of Lab</ButtonText>
                            </StyledButton>
                        </StyledForArea>
                    </WelcomeContainer3>
                </InnerContainer3>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ backgroundColor: '#ADD8E6', borderWidth: 2, borderColor: 'black', borderRadius: 10, padding: 20, marginTop: 10 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{cityName}</Text>
                            {getWeatherIcon()}
                            {weatherData && (
                                <>
                                    <Text style={{ fontSize: 18, marginBottom: 10 }}>Temperature: {weatherData.main.temp}°C</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Ionicons name="water-outline" size={24} color="#87CEEB" />
                                            <Text style={{ fontSize: 16, marginLeft: 5 }}>Humidity: {weatherData.main.humidity}%</Text>
                                        </View>
                                        <View style={{ borderLeftWidth: 1, borderLeftColor: 'black', marginLeft: 20, paddingLeft: 20 }}>
                                            <Ionicons name="speedometer-outline" size={24} color="#4682B4" />
                                            <Text style={{ fontSize: 16, marginLeft: 5 }}>Wind: {weatherData.wind.speed} m/s</Text>
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '100%', marginBottom: 10 }} />
                                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                        <Ionicons name="sunny" size={24} color="#FFD700" />
                                        <Text style={{ fontSize: 16 }}>Sunrise: {weatherData && new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Ionicons name="moon" size={24} color="#000080" />
                                        <Text style={{ fontSize: 16 }}>Sunset: {weatherData && new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</Text>
                                    </View>
                                </>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Welcome;
