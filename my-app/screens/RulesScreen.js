import React, {useState} from "react";
import { StyleSheet, View, ScrollView, Text, ImageBackground, TouchableOpacity,  } from "react-native";

const RulesScreen = ({ navigation }) => {

 
//
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImg}
                source={require('../assets/images/1.png')}
                >
                <ScrollView style={styles.scrollConteiner}>
                    <Text style={styles.headText}>Rules:</Text>

                    <Text style={styles.text}>

                        1. The game "Fifteen Puzzle" consists of a square grid with numbered tiles.
                        {'\n'}2. The grid size is typically 4x4, containing 15 numbered tiles and one empty space.
                        {'\n'}3. The objective of the game is to arrange the tiles in ascending order, with the empty space in the bottom right corner.
                        {'\n'}4. Tiles can be moved horizontally or vertically into the adjacent empty space.
                        {'\n'}5. To move a tile, click on it or swipe it into the empty space.
                        {'\n'}6. Only tiles adjacent to the empty space can be moved.
                        {'\n'}7. The empty space allows tiles to shift and rearrange.
                        {'\n'}8. The game is won when all the tiles are arranged in numerical order with the empty space in the bottom right corner.
                        {'\n'}9. Some game variations may have a different grid size or different starting configurations.
                        {'\n'}10. The number of moves taken to solve the puzzle can be recorded and compared with others.
                        {'\n'}11. The game can be played for fun or as a challenging exercise in logic and problem-solving.
                    </Text>
                </ScrollView>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>{"<-"}</Text>
                </TouchableOpacity>
            </ImageBackground>
            
        </View>
    );
};

export default RulesScreen;  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    backgroundImg: {
     flex: 1,
    },
    scrollConteiner: {
        marginTop: 50,
        marginHorizontal: 20,
    },
    headText: {
        fontSize: 28,
        color: '#1C2A4D',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        color: '#1C2A4D',
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 40,
        textDecoration: 'none',
        marginBottom: 20,
        paddingTop: 8,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#FFD700',
        width: 50,
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%)',
        backgroundSize: 'cover',
        backgroundColor: '#2E3A4D',
        opacity: 0.9,
    },
    buttonText: {
        color: '#FFD700',
        fontSize: 16,
    },
});


