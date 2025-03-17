import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
    const [events, setEvents] = useState([]);
    const [region, setRegion] = useState({
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    });
    const navigation = useNavigation();

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        // Placeholder for fetching event data
        const dummyEvents = [
            {
                id: '1',
                title: 'Classic Car Show',
                latitude: 37.7794,
                longitude: -122.4184,
                date: 'April 10, 2025',
                image: 'https://example.com/carshow1.jpg',
            },
            {
                id: '2',
                title: 'Cruise Night',
                latitude: 37.7694,
                longitude: -122.4294,
                date: 'April 15, 2025',
                image: 'https://example.com/carshow2.jpg',
            },
        ];
        setEvents(dummyEvents);
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={region}>
                {events.map((event) => (
                    <Marker
                        key={event.id}
                        coordinate={{ latitude: event.latitude, longitude: event.longitude }}
                        title={event.title}
                        description={event.date}
                    />
                ))}
            </MapView>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.eventItem}
                        onPress={() => navigation.navigate('EventDetails', { event: item })}
                    >
                        <Image source={{ uri: item.image }} style={styles.eventImage} />
                        <View style={styles.eventInfo}>
                            <Text style={styles.eventTitle}>{item.title}</Text>
                            <Text style={styles.eventDate}>{item.date}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '50%',
    },
    eventItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    eventImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    eventInfo: {
        flex: 1,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventDate: {
        fontSize: 14,
        color: 'gray',
    },
});

export default HomeScreen;
