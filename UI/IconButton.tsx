/* eslint-disable */
import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

const IconButton = ({ icon, /*size,*/ color, onPress}) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
            <Text style={{color}}>{icon}</Text>
            </View>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.75,
    }
});