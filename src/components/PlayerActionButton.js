import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

const outSideRingSize = 90;
const buttonSize = 70;
const PlayerActionButton = ({onPlayPress, isPressed}) => {
    const icons = ['control-pause', 'control-play'];

    return (
        <Pressable onPress={() => onPlayPress(!isPressed)}>
            {isPressed && <LottieView style={styles.animation} loop autoPlay
                                      source={require('../assets/animations/equaliser.json')}/>}
            <View >
                <View style={styles.outsideRing}>
                    <View style={styles.button}>
                        <SimpleLineIcons name={isPressed ? icons[1] : icons[0]} style={{paddingLeft: isPressed ? 5 : 0}}
                                         size={30} color="#fff"/>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};
export default PlayerActionButton;

const styles = StyleSheet.create({
    animation: {
        width: 190,
        height: 190,
        position:'absolute',
        right:-25,
        bottom:-25,
    },
    outsideRing: {
        width: outSideRingSize,
        height: outSideRingSize,
        borderRadius: outSideRingSize / 2,
        borderWidth: 1.3,
        borderColor: 'rgba(245,30,56,0.53)',
        backgroundColor: 'rgba(255,53,67,0.27)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize / 2,
        backgroundColor: '#F51E38',
        alignItems: 'center',
        justifyContent: 'center'
    }
});