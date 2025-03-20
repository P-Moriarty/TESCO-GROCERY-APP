import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionTitleText,
    AccordionContentText,
    AccordionIcon,
    AccordionContent,
} from "@/components/ui/accordion"
import { Card } from '@/components/ui/card';
import { HStack } from '@/components/ui/hstack';
import { Image } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { ChevronUpIcon, ChevronDownIcon } from "@/components/ui/icon";
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width } = Dimensions.get('window');

const carouselData = [
    {
        id: "1",
        title: "Enjoy up to 30% off",
        subtitle: "From now till the end of this month",
        image: require("../../assets/images/Tesco-Fruits.png"),
    },
    {
        id: "2",
        title: "Fresh Vegetables",
        subtitle: "Get healthy greens at great prices",
        image: require("../../assets/images/Tesco-Fruits.png"),
    },
    {
        id: "3",
        title: "Refreshing Drinks",
        subtitle: "Stay cool with our selection of beverages",
        image: require("../../assets/images/Tesco-Fruits.png"),
    },
];

const categoriesData = [
    { id: "1", name: "Fruits", image: require("../../assets/images/Tesco-Fruits.png") },
    { id: "2", name: "Vegetables", image: require("../../assets/images/Tesco-Ewe.png") },
    { id: "3", name: "Snacks", image: require("../../assets/images/Tesco-Lays.png") },
    { id: "4", name: "Beverages", image: require("../../assets/images/Tesco-Bottle.png") },
    { id: "5", name: "Detergent", image: require("../../assets/images/Tesco-Det.png") },
];

const fruits = [
    { id: '1', name: 'Pineapple', image: require('../../assets/images/Pineapple.png'), rating: 4.8, reviews: 287 },
    { id: '2', name: 'Coconut', image: require('../../assets/images/Coconut.png'), rating: 4.0, reviews: 122 },
    { id: '3', name: 'Watermelon', image: require('../../assets/images/Watermelon.png'), rating: 4.3, reviews: 129 },
];

export default function HomeScreen() {
    return (
        <KeyboardAwareScrollView>
            <SafeAreaView style={styles.titleContainer}>
                <View >
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="motorbike" size={24} color="black" style={{ marginLeft: 10 }} />
                        <Accordion
                            size="md"
                            variant="filled"
                            type="single"
                            isCollapsible={true}
                            isDisabled={false}
                            className="w-[60%] bg-transparent shadow-black mr-20"
                        >
                            <AccordionItem value="a">
                                <AccordionHeader>
                                    <AccordionTrigger>
                                        {({ isExpanded }) => (
                                            <>
                                                <AccordionTitleText className='font font-normal'>
                                                    14 Peckham street...
                                                </AccordionTitleText>
                                                {isExpanded ? (
                                                    <AccordionIcon as={ChevronUpIcon} className="ml-1" />
                                                ) : (
                                                    <AccordionIcon as={ChevronDownIcon} className="ml-1" />
                                                )}
                                            </>
                                        )}
                                    </AccordionTrigger>
                                </AccordionHeader>
                                <AccordionContent>
                                    <AccordionContentText>
                                        To place an order, simply select the products you want, proceed to
                                        checkout, provide shipping and payment information, and finalize
                                        your purchase.
                                    </AccordionContentText>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <FontAwesome name="shopping-basket" size={24} color="black" style={{ marginRight: 10 }} />
                    </View>

                    {/* Centered Carousel */}
                    <View style={styles.carouselWrapper}>
                        <Carousel
                            loop
                            width={width}
                            height={320} // Increased height
                            autoPlay={true}
                            autoPlayInterval={3000}
                            data={carouselData}
                            scrollAnimationDuration={1000}
                            snapEnabled={true}
                            mode="parallax"
                            modeConfig={{
                                parallaxScrollingScale: 0.85,
                                parallaxScrollingOffset: 50,
                            }}
                            renderItem={({ item }) => (
                                <View style={styles.cardContainer}>
                                    <Card style={styles.cardContent}>
                                        <HStack>
                                            <View style={styles.headerText}>
                                                <Heading>{item.title}</Heading>
                                                <Text style={{ width: 170, fontWeight: "300", marginTop: 5 }}>
                                                    {item.subtitle}
                                                </Text>
                                                <Button
                                                    size="md"
                                                    variant="solid"
                                                    action="primary"
                                                    style={styles.button}
                                                >
                                                    <ButtonText style={styles.buttonText}>Shop Now</ButtonText>
                                                </Button>
                                            </View>
                                            <View style={styles.imageContainer}>
                                                <Image source={item.image} style={styles.image} />
                                            </View>
                                        </HStack>
                                    </Card>
                                </View>
                            )}
                        />
                    </View>
                </View>
                <View style={styles.categoriesWrapper}>
                    <Heading>Categories</Heading>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categoriesData.map((item) => (
                            <View key={item.id} style={styles.categoryItem}>
                                <Card style={styles.categoryCard}>
                                    <Image source={item.image} style={styles.categoryImage} />
                                </Card>
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.fruitsContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Fruits</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={fruits}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View >
                                <View style={styles.card}>
                                    <Image source={item.image} style={styles.fruitImage} />
                                    <TouchableOpacity style={styles.addButton}>
                                        <MaterialIcons name="add" size={16} color="black" />
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.cardDescription}>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.ratingContainer}>
                                    <MaterialIcons name="star" size={14} color="#F4C430" />
                                    <Text style={styles.rating}>{item.rating} ({item.reviews})</Text>
                                </View>
                                </View>
                                
                            </View>


                        )}
                    />
                </View>

            </SafeAreaView>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        gap: 8,
    },
    carouselWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    cardContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.95, // Increased width
    },
    cardContent: {
        backgroundColor: '#F5D57D',
        width: 400, // Increased card width
        height: 280, // Increased card height
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    headerText: {
        gap: 12,
        marginTop: 20,
        width: 140,
    },
    imageContainer: {
        marginLeft: 20,
        marginTop: 10,
    },
    image: {
        width: 200, // Increased image size
        height: 200,
        borderRadius: 12,
    },
    button: {
        marginTop: 20,
        width: 120,
        height: 40,
        backgroundColor: '#EEB61D',
        borderRadius: 12,
    },
    buttonText: {
        flex: 1,
        alignContent: 'center',
        color: 'black',
    },
    categoriesWrapper: {
        flex: 1,
        padding: 10,
    },
    categoryItem: {
        alignItems: "center", // Centers text below image
        marginHorizontal: 5, // Space between cards
        marginTop: 10,
    },
    categoryCard: {
        width: 80, // Make width and height equal
        height: 80,
        backgroundColor: "#ECECEC",
        borderRadius: 40, // Half of width/height to make a circle
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    categoryImage: {
        width: 50,
        height: 50,
        borderRadius: 25, // Half of width/height to keep image circular
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
    fruitsContainer: {
        paddingVertical: 10,
        marginTop: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        fontSize: 14,
        color: '#EEB61D',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#f5f5f5',
        width: 120,
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 8,
    },
    cardDescription: {
        padding: 10,
        alignItems: 'center',
        
    },
    fruitImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    addButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 4,
    },
    name: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    rating: {
        marginLeft: 4,
        fontSize: 12,
        color: 'gray',
    },
});
