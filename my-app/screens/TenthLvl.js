import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, Image, View, Alert, TouchableOpacity, Text, Button } from 'react-native';
import { useDispatch, } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { saveCompletedLevels } from '../redax/store';

import Timer from '../components/Timer/Timer';


const TenthLvl = ({ navigation }) => {

   const [board, setBoard] = useState([
         { id: 1, image: require('../assets/images/lvl_10/image_part_001.jpg') },
        { id: 2, image: require('../assets/images/lvl_10/image_part_002.jpg') },
        { id: 3, image: require('../assets/images/lvl_10/image_part_003.jpg') },
        { id: 4, image: require('../assets/images/lvl_10/image_part_004.jpg') },
        { id: 5, image: require('../assets/images/lvl_10/image_part_005.jpg') },
        { id: 6, image: require('../assets/images/lvl_10/image_part_006.jpg') },
        { id: 7, image: require('../assets/images/lvl_10/image_part_007.jpg') },
        { id: 8, image: require('../assets/images/lvl_10/image_part_008.jpg') },
        { id: 9, image: require('../assets/images/lvl_10/image_part_009.jpg') },
        { id: 10, image: require('../assets/images/lvl_10/image_part_010.jpg') },
        { id: 11, image: require('../assets/images/lvl_10/image_part_011.jpg') },
        { id: 12, image: require('../assets/images/lvl_10/image_part_012.jpg') },
        { id: 13, image: require('../assets/images/lvl_10/image_part_013.jpg') },
        { id: 14, image: require('../assets/images/lvl_10/image_part_014.jpg') },
        { id: 15, image: require('../assets/images/lvl_10/image_part_015.jpg') },
        { id: 16, image: require('../assets/images/1616662546_34-p-belii-fon-kvadrat-38.jpg') }
    ]);
    
    const [emptyIndex, setEmptyIndex] = useState(0);
    console.log(emptyIndex)

    const [firtRender, setFirtRender] = useState(true);
    const [complited, setComplited] = useState(false);

    const dispatch = useDispatch();
    const unlockedLevels = useSelector((state) => state.unlockedLevels);

    const level = 10;
    const timer = 10 * 60 - level * 10 + 10;

 //перемешивает пазлы при первом рендере
    useEffect(() => {

        mixingPuzzles();
    }, []);

    //если собрал пазл то сообщ о победе(пропуская первый рендер)
    useEffect(() => {
        if (firtRender) {
            setFirtRender(false);
        }
        else if (isBoardSolved()) {
            Alert.alert('Ты победил!');
            setComplited(true);
            addAnlocadLvl();
        }
    }, []);
    /////////////////////////////

    const canMovePiece = (pieceIndex) => {
        const rowSize = Math.sqrt(board.length);///
        const emptyRow = Math.floor(emptyIndex / rowSize);
        const emptyCol = emptyIndex % rowSize;
        const pieceRow = Math.floor(pieceIndex / rowSize);
        const pieceCol = pieceIndex % rowSize;

        return (
            (emptyRow === pieceRow && Math.abs(emptyCol - pieceCol) === 1) ||
            (emptyCol === pieceCol && Math.abs(emptyRow - pieceRow) === 1)
        );
    };

    const movePiece = (pieceIndex) => {
        if (canMovePiece(pieceIndex)) {
            const updatedBoard = [...board];
            [updatedBoard[pieceIndex], updatedBoard[emptyIndex]] = [updatedBoard[emptyIndex], updatedBoard[pieceIndex]];
            setBoard(updatedBoard);
            setEmptyIndex(pieceIndex);
        }
    };

    //перемешивает пазл
    const mixingPuzzles = () => {
        const shuffledBoard = [...board];
        shuffledBoard.sort(() => Math.random() - 0.5);
        setBoard(shuffledBoard);
        //board.findIndex((piece) => piece.id === 16)
        const emptyIndex = shuffledBoard.findIndex((piece) => piece.id === 16);
        setEmptyIndex(emptyIndex);
    };

    //проверяет собран ли борд
    const isBoardSolved = () => {
        for (let i = 0; i < board.length - 1; i++) {
            if (board[i].id !== i + 1) {
                return false;
            }
        }
        return true;
    };
    //
    const addAnlocadLvl = () => {
        dispatch(saveCompletedLevels(unlockedLevels + 1));
    };


    return (
         <View
            style={styles.container}>
            <ImageBackground
                style={styles.backgroundImg}
                source={require('../assets/images/1.png')}>
               
                <View style={styles.contentConteiner}>
                    <Timer time={timer} />
          
                    <View style={styles.board}>
                        {board.map((piece, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: 70,
                                    height: 70,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'lightblue',
                                }}
                                onPress={() => movePiece(index)}
                                disabled={!canMovePiece(index)} >
                                <Image source={piece.image}
                                    style={{width: 70, height: 70} } />
                            </TouchableOpacity>))}
                    </View>
                    <View style={styles.imgConteiner}>
                        <Image style={styles.img} source={require('../assets/images/lvl_10/1.png')} />
                    </View>
                    
          
                    {complited ? (<TouchableOpacity
                        style={styles.levelButton}
                        onPress={() => navigation.navigate('LvlSelection')}>
                        <Text style={styles.levelButtonText}>WINNER!!!</Text>
                    </TouchableOpacity>) : (<Text style={styles.levelText}>Level: {level}</Text>)}
        
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('LvlSelection')}>
                        <Text style={styles.buttonText}>{"<-"}</Text>
                    </TouchableOpacity>
                </View>
                
              
            </ImageBackground>
         
        </View>
    );
};

const styles = StyleSheet.create({
      container: {
        flex: 1,
        position: 'relative',
    },
    contentConteiner: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
      backgroundImg: {
     flex: 1,
    },
      
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        borderTopWidth: 35,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderColor: '#FFD700',
        
    },
  /////
    levelButton: {
        marginTop: 20,
        backgroundColor: '#2E3A4D',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFD700',
        marginBottom: 10,
    },
    levelButtonText: {
        color: '#FFD700',
        fontSize: 16,
    },
 ///////
    imgConteiner: {
        
        flexDirection: 'row',
    },
    img: {
        marginLeft: 0,
        marginTop: 20,
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'gold',
        justifyContent: 'flex-start',
    },

    levelText: {
        marginTop: 20,
        fontSize: 30,
        color: 'white',
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

export default TenthLvl;