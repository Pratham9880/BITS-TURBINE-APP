import React, { useState } from "react";
import { StatusBar, ScrollView, View, Text, Image, TouchableOpacity, Linking, TextInput } from "react-native";
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
    InnerContainer2,
    PageTitle,
    SubTitle,
    StyledForArea,
    LeftIcon,
    RightIcon,
    StyledTextInput
} from './../Components/styles';

const Plant1 = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    const [title3, setTitle3] = useState("");
    const [reading1, setReading1] = useState("");
    const [reading2, setReading2] = useState("");
    const [reading3, setReading3] = useState("");

    // Function to handle opening the map application with the lab location
    const handleOpenMap = () => {
        const coordinates = "15.391101,73.881500"; // Coordinates of the lab location
        const label = "Lab Location"; // Label for the location
        const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}&query_place_id=${label}`;
        Linking.openURL(url);
    };

    // Function to render subtitle and text with horizontal border
    const renderSubtitleAndText = (title, text) => {
        return (
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <SubTitle style={{ fontSize: 25, textAlign: 'center', borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 5 }}>{title}</SubTitle>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>{text}</Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1,backgroundColor:'#FEDBD0' }}>
            <StatusBar style="light" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <InnerContainer2>
                    <PageTitle>Wind Turbine App</PageTitle>
                    
                    {/* Box for additional details */}
                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10, marginBottom: 20,backgroundColor:'#FEEAE6' }}>
                        <SubTitle style={{ fontSize: 20 }}>Wind Turbine Readings</SubTitle>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Current Production</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5 }}
                                value={title1}
                                onChangeText={setTitle1}
                            />
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Production Today</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5 }}
                                value={title2}
                                onChangeText={setTitle2}
                            />
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Monthly Production</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5 }}
                                value={title3}
                                onChangeText={setTitle3}
                            />
                        </View>
                    </View>
                    <SubTitle>Details of Turbine</SubTitle>
                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10, marginBottom: 20, alignItems: 'center',backgroundColor:'#FEEAE6' }}>
                        <Image
                            style={{ width: 190, height: 200, marginBottom: 20 }} // Adjust the styles as needed
                            resizeMode="cover"
                            source={require('./../assets/img/turbine1.jpg')} 
                        />
                        <StyledForArea style={{ alignItems: 'center' }}>
                            {renderSubtitleAndText('Turbine ID', 'SN: 221030647')}
                            {renderSubtitleAndText('Capacity', '1 kW')}
                            {renderSubtitleAndText('Current Production', '100 kWh')}
                            {renderSubtitleAndText('Hub Height', '15 m')}
                            {renderSubtitleAndText('Type of Turbine', 'Archimedes Turbine')}
                            {renderSubtitleAndText('No of Blades', '3 Circular Blades')}
                            {renderSubtitleAndText('Type of Generator', 'Permanent Magnet Synchronous')}
                            {renderSubtitleAndText('Stand Alone', 'No')}
                            {renderSubtitleAndText('Grid Connected', 'Yes')}
                        </StyledForArea>
                    </View>
                </InnerContainer2>
            </ScrollView>
            <TouchableOpacity onPress={handleOpenMap} style={{ alignItems: 'center', marginBottom: 20,backgroundColor:'#442C2E' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Location</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Plant1;
