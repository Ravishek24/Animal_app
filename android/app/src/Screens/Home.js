import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.appName}>Animall.in</Text>
                <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profilePic} />
            </View>

            {/* Main Options */}
            <View style={styles.mainOptions}>
                <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('BuyAnimals')}>
                    <Text style={styles.optionText}>पशु ख़रीदें</Text>
                    <Text style={styles.subText}>288+ नए पशु उपलब्ध</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('SellAnimals')}>
                    <Text style={styles.optionText}>पशु बेचें</Text>
                    <Text style={styles.subText}>385+ ख़रीददार उपलब्ध</Text>
                </TouchableOpacity>
            </View>

            {/* Free Animal Listing */}
            <View style={styles.freeListing}>
                <Text style={styles.freeText}>FREE में पशु दर्ज करें</Text>
                <Text>बिना किसी पेमेंट के, पशु आसानी से बेचें</Text>
                <View style={styles.animalButtons}>
                    <TouchableOpacity style={styles.animalButton}><Text>गाय</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.animalButton}><Text>भैंस</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.animalButton}><Text>अन्य पशु</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5' },
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#005F45' },
    appName: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    profilePic: { width: 40, height: 40, borderRadius: 20 },
    mainOptions: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
    optionCard: { backgroundColor: '#DFF6E3', padding: 20, borderRadius: 10, width: '45%', alignItems: 'center' },
    optionText: { fontSize: 18, fontWeight: 'bold' },
    subText: { fontSize: 14, color: 'gray' },
    freeListing: { backgroundColor: '#E0F7FA', padding: 15, margin: 15, borderRadius: 10 },
    freeText: { fontSize: 16, fontWeight: 'bold', color: '#00796B' },
    animalButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
    animalButton: { backgroundColor: '#B2DFDB', padding: 10, borderRadius: 5 }
});

export default HomeScreen;