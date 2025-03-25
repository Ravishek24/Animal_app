// screens/PashupalanManch/ForumScreen.js
import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForumScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image 
                            source={{ uri: 'https://via.placeholder.com/40' }} 
                            style={styles.logoImage} 
                        />
                        <Text style={styles.logoText}>पशुपालन मंच</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.userProfile}
                        onPress={() => navigation.navigate('ProfileTab')}
                    >
                        <Image 
                            source={{ uri: 'https://via.placeholder.com/40' }} 
                            style={styles.profileImage} 
                        />
                        <Text style={styles.profileText}>Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Banner */}
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>
                        🐄 India's first livestock and animal care marketplace 🐂
                    </Text>
                </View>

                {/* Hero Image */}
                <View style={styles.heroImage}>
                    <Image 
                        source={{ uri: 'https://via.placeholder.com/300/180' }} 
                        style={styles.heroImg}
                        resizeMode="contain" 
                    />
                </View>

                {/* Stats Section */}
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={styles.statsNumber}>342+</Text>
                        <Text style={styles.statsLabel}>नए पशु उपलब्ध</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={styles.statsNumber}>520+</Text>
                        <Text style={styles.statsLabel}>ख़रीदार उपलब्ध</Text>
                    </View>
                </View>

                {/* Main options: Buy and Sell */}
                <View style={styles.mainOptions}>
                    {/* Buy animals option */}
                    <TouchableOpacity 
                        style={styles.optionCard}
                        onPress={() => navigation.navigate('BuyTab')}
                    >
                        <View style={styles.optionImage}>
                            <Image 
                                source={{ uri: 'https://via.placeholder.com/80' }} 
                                style={styles.optionImg} 
                                resizeMode="contain"
                            />
                        </View>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.optionButtonText}>पशु खरीदें</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    
                    {/* Sell animals option */}
                    <TouchableOpacity 
                        style={styles.optionCard}
                        onPress={() => navigation.navigate('SellTab')}
                    >
                        <View style={styles.optionImage}>
                            <Image 
                                source={{ uri: 'https://via.placeholder.com/80' }} 
                                style={styles.optionImg}
                                resizeMode="contain" 
                            />
                        </View>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.optionButtonText}>पशु बेचें</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                {/* Free listing section */}
                <View style={styles.freeListing}>
                    <View style={styles.freeHeader}>
                        <Image 
                            source={{ uri: 'https://via.placeholder.com/50' }} 
                            style={styles.freeHeaderImage} 
                        />
                        <View>
                            <Text style={styles.freeTitle}>FREE में पशु दर्ज करें</Text>
                            <Text style={styles.freeSubtitle}>बिना किसी पेमेंट के, पशु आसानी से बेचें</Text>
                        </View>
                    </View>
                    <Text style={styles.whatToSell}>क्या बेचना है?</Text>
                    <View style={styles.animalOptions}>
                        <TouchableOpacity 
                            style={styles.animalOption}
                            onPress={() => navigation.navigate('SellTab')}
                        >
                            <Text style={styles.animalOptionText}>गाय</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.animalOption}
                            onPress={() => navigation.navigate('SellTab')}
                        >
                            <Text style={styles.animalOptionText}>भैंस</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.animalOption}
                            onPress={() => navigation.navigate('SellTab')}
                        >
                            <Text style={styles.animalOptionText}>अन्य पशु</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Process section */}
                <View style={styles.processSection}>
                    <Text style={styles.processTitle}>समझें हर प्रक्रिया, आसान तरीके से!</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.processSteps}>
                        <TouchableOpacity style={styles.processStep}>
                            <View style={styles.stepImage}>
                                <Image 
                                    source={{ uri: 'https://via.placeholder.com/100/80' }} 
                                    style={styles.stepImg}
                                    resizeMode="contain" 
                                />
                            </View>
                            <Text style={styles.stepTitle}>कैसे खरीदें पशुपालन मंच पे पशु?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.processStep}>
                            <View style={styles.stepImage}>
                                <Image 
                                    source={{ uri: 'https://via.placeholder.com/100/80' }} 
                                    style={styles.stepImg}
                                    resizeMode="contain" 
                                />
                            </View>
                            <Text style={styles.stepTitle}>पशु बेचने का सही तरीका जानें</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.processStep}>
                            <View style={styles.stepImage}>
                                <Image 
                                    source={{ uri: 'https://via.placeholder.com/100/80' }} 
                                    style={styles.stepImg}
                                    resizeMode="contain" 
                                />
                            </View>
                            <Text style={styles.stepTitle}>1 दिन में कैसे बिकेगा पशु?</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* Additional padding at bottom to ensure content is visible above bottom nav */}
                <View style={{ height: 70 }} />
            </ScrollView>

            {/* Bottom Navigation is handled by the Tab Navigator in AppNavigator.js */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#ff3b3b',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#3a3a3a',
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 8,
    },
    logoText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    },
    userProfile: {
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffcc00',
    },
    profileText: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
    banner: {
        backgroundColor: '#39b3ff',
        padding: 15,
        alignItems: 'center',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#3a3a3a',
        marginBottom: 15,
    },
    bannerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    heroImage: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#3a3a3a',
    },
    heroImg: {
        width: '80%',
        height: 180,
    },
    statsContainer: {
        flexDirection: 'row',
        padding: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#3a3a3a',
    },
    statsBox: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 5,
    },
    statsNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff3b3b',
    },
    statsLabel: {
        fontSize: 12,
        color: '#444',
    },
    mainOptions: {
        flexDirection: 'row',
        padding: 15,
        gap: 15,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#3a3a3a',
    },
    optionCard: {
        flex: 1,
        backgroundColor: '#ff9c4a',
        borderRadius: 16,
        alignItems: 'center',
        padding: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    optionImage: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    optionImg: {
        height: '100%',
        width: '100%',
    },
    optionButton: {
        backgroundColor: '#ffcc00',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    optionButtonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    freeListing: {
        backgroundColor: '#ffffff',
        margin: 15,
        borderRadius: 12,
        padding: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderWidth: 2,
        borderColor: '#3a3a3a',
    },
    freeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    freeHeaderImage: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 8,
    },
    freeTitle: {
        color: '#ff3b3b',
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 5,
    },
    freeSubtitle: {
        color: '#666',
        fontSize: 14,
    },
    whatToSell: {
        marginVertical: 15,
        fontWeight: 'bold',
        color: '#444',
    },
    animalOptions: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    animalOption: {
        flex: 1,
        backgroundColor: '#ffcc00',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    animalOptionText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    processSection: {
        padding: 15,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#3a3a3a',
    },
    processTitle: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 15,
        fontSize: 16,
    },
    processSteps: {
        flexDirection: 'row',
    },
    processStep: {
        width: 150,
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#3a3a3a',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    stepImage: {
        height: 100,
        backgroundColor: '#39b3ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepImg: {
        width: '80%',
        height: '80%',
    },
    stepTitle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 14,
        color: '#444',
    },
});

export default ForumScreen;