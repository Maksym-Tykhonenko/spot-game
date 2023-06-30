import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';


 

const Timer = ({time}) => {

    const [timer, setTimer] = useState(time);
    const[isRuning, setIsRuning]= useState(true);
//console.log(timer)
    //эфект обратного отщета времени
    useEffect(() => {
       
        const timerInterval = setInterval(() => {
            if (isRuning) {
                setTimer((prevTimer) => prevTimer - 1);
            };
        }, 1000);

        if (timer === 0) {
            clearInterval(timerInterval);
            Alert.alert('GAME OVER!!! ((');
        }

        return () => {
            clearInterval(timerInterval);
        };
    }, [timer, isRuning]);
    
    //формат времени
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    };

    //oстановка таймера
    const handleChangeTimerRunState = () => {
        setIsRuning(!isRuning);
     }
    
    return (
        <View style={styles.container}>
            {isRuning ? (<TouchableOpacity
                style={styles.btnStop}
                onPress={handleChangeTimerRunState}>
                <Text style={{color: '#FFD700', fontSize: 25,}}>Stop</Text>
            </TouchableOpacity>) : (<TouchableOpacity
                style={styles.btnPlay}
                onPress={handleChangeTimerRunState}>
                <Text style={{color: '#FFD700', fontSize: 25,}}>Play</Text>
            </TouchableOpacity>)}
            
            <Text style={styles.timerText}>{formatTime(timer)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        fontSize: 40,
        color: '#000205',
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 3,
        color: '#FFD700',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#2E3A4D',
        height: 60,
    },
    btnStop: {
        marginRight: 10,
        color: '#000205',
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 3,
        color: '#FFD700',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#2E3A4D',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        /**/
    },
    btnPlay: {
        marginRight: 10,
        color: '#000205',
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 3,
        color: '#FFD700',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#2E3A4D',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        /**/
    },
});

export default Timer;