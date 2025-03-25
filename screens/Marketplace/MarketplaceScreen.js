// screens/Marketplace/MarketplaceScreen.js
import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    TextInput, 
    Image, 
    FlatList,
    SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // If using Expo, otherwise use another icon library

// Sample product data
const productData = [
    { id: '1', name: 'Cattle Feed - Premium Mix', price: '₹1,200', quantity: '50kg bag', image: 'https://via.placeholder.com/120' },
    { id: '2', name: 'Milk Production Booster', price: '₹850', quantity: '5kg box', image: 'https://via.placeholder.com/120' },
    { id: '3', name: 'Calcium Supplement', price: '₹550', quantity: '1kg bottle', image: 'https://via.placeholder.com/120' },
    { id: '4', name: 'Automatic Water Dispenser', price: '₹2,100', quantity: '1 unit', image: 'https://via.placeholder.com/120' },
    { id: '5', name: 'Animal Health Tonic', price: '₹650', quantity: '500ml', image: 'https://via.placeholder.com/120' },
];

const MarketplaceScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const renderProductItem = ({ item }) => (
        <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productQuantity}>{item.quantity}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Marketplace</Text>
                <TouchableOpacity style={styles.cartButton}>
                    <Ionicons name="cart-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search products..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                {['All', 'Feed', 'Supplements', 'Medicine', 'Equipment', 'Offers'].map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category && styles.selectedCategory,
                        ]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === category && styles.selectedCategoryText,
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.bannerContainer}>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/350/150' }} 
                    style={styles.bannerImage}
                    resizeMode="cover"
                />
                <View style={styles.bannerContent}>
                    <Text style={styles.bannerText}>Special Offer!</Text>
                    <Text style={styles.bannerDescription}>20% OFF on all supplements</Text>
                    <TouchableOpacity style={styles.bannerButton}>
                        <Text style={styles.bannerButtonText}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Popular Products</Text>

            <FlatList
                data={productData}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#005F45',
        padding: 15,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartButton: {
        padding: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    categoryContainer: {
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'white',
        marginRight: 10,
    },
    selectedCategory: {
        backgroundColor: '#005F45',
    },
    categoryText: {
        color: '#333',
    },
    selectedCategoryText: {
        color: 'white',
    },
    bannerContainer: {
        margin: 15,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: 150,
    },
    bannerContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
    },
    bannerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    bannerDescription: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
    bannerButton: {
        backgroundColor: '#ffcc00',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    bannerButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    productList: {
        padding: 15,
    },
    productCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    productImage: {
        width: 120,
        height: 120,
    },
    productDetails: {
        flex: 1,
        padding: 10,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    productQuantity: {
        color: 'gray',
        fontSize: 14,
        marginVertical: 5,
    },
    productPrice: {
        color: '#005F45',
        fontWeight: 'bold',
        fontSize: 16,
    },
    addToCartButton: {
        backgroundColor: '#005F45',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    addToCartText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default MarketplaceScreen;