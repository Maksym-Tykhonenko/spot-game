import React, {useEffect} from 'react';
import { View, ScrollView, Button, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { getCompletedLevels } from '../redax/store';

const LvlSelectionScreen = ({ navigation }) => {
 
    const unlockedLevels = useSelector(state => state.myUnlockdLvl);
    //const dispatch = useDispatch();

    
    //useEffect(() => {
    //    dispatch(getCompletedLevels());
    //}, []);

    const handleLevelSelect = (level) => {
        if (level <= unlockedLevels) {
            navigation.navigate(`${level} Lvl`);
        };
    };

    return (
        <View style={styles.container}>
            
            <ImageBackground source={require('../assets/images/1.png')}>
                
                <ScrollView style={{ marginTop: 60 }}>
            
                    <View style={styles.lvlConteiner}>
                        <TouchableOpacity
                            onPress={() => handleLevelSelect(1)}
                            disabled={1 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 1 <= unlockedLevels ? 'transparent' : '#666666',
                                opacity: 1 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
          
                            <Text style={styles.lvlText}>Level 1</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_1/2.png')} />
                        </TouchableOpacity>
            
                        <TouchableOpacity
                            onPress={() => handleLevelSelect(2)}
                            disabled={2 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 2 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 2 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
              
                            }}>
                            <Text style={styles.lvlText}>Level 2</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_2/3.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleLevelSelect(3)}
                            disabled={3 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 3 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 3 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 3</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_3/4.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleLevelSelect(4)}
                            disabled={4 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 4 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 4 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 4</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_4/5.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleLevelSelect(5)}
                            disabled={5 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 5 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 5 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 5</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_5/6.png')} />
                        </TouchableOpacity>
        
                        <TouchableOpacity
                            onPress={() => handleLevelSelect(6)}
                            disabled={6 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 6 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 6 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 6</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_6/7.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleLevelSelect(7)}
                            disabled={7 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 7 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 7 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 7</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_7/8.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleLevelSelect(8)}
                            disabled={8 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 8 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 8 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 8</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_8/9.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleLevelSelect(9)}
                            disabled={9 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 9 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 9 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 9</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_9/10.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleLevelSelect(10)}
                            disabled={10 > unlockedLevels}
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: '#FFD700',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 10 <= unlockedLevels ? 'transparent' : '#999999',
                                opacity: 10 <= unlockedLevels ? 1 : 0.65,
                                marginBottom: 20,
                            }}>
                            <Text style={styles.lvlText}>Level 10</Text>
                            <Image style={styles.img} source={require('../assets/images/lvl_10/1.png')} />
                        </TouchableOpacity>
                    </View>
        
                </ScrollView>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>{"<-" }</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    lvlConteiner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
    },
    lvlText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFD700',
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



export default LvlSelectionScreen;