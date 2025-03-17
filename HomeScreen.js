import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const EventDetailsScreen = () => {
    const route = useRoute();
    const { event } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDate}><Ionicons name="calendar" size={16} color="gray" /> {event.date}</Text>
                <Text style={styles.eventLocation}><Ionicons name="location" size={16} color="gray" /> {event.location || 'Location not specified'}</Text>
            </View>
            
            <Text style={styles.sectionTitle}>Event Details</Text>
            <Text style={styles.eventDescription}>{event.description || 'No additional details available.'}</Text>
            
            <TouchableOpacity style={styles.rsvpButton}>
                <Ionicons name="checkmark-circle" size={20} color="white" />
                <Text style={styles.rsvpText}>RSVP to Event</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    eventImage: {
        width: '100%',
        height: 250,
    },
    eventInfo: {
        padding: 15,
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    eventDate: {
        fontSize: 16,
        color: 'gray',
        marginVertical: 5,
    },
    eventLocation: {
        fontSize: 16,
        color: 'gray',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    eventDescription: {
        fontSize: 16,
        paddingHorizontal: 15,
        color: '#444',
        marginBottom: 20,
    },
    rsvpButton: {
        backgroundColor: '#d9534f',
        padding: 15,
        margin: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rsvpText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
});

export default EventDetailsScreen;
