import React, { useState } from 'react'
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native'
import wateringImg from '../assets/watering.png'
import { Button } from '../components/button';
import colors from '../styles/colors';

export const Welcome = () => {
    const [ visible, setVisible ] = useState(false)

    const handleVisibility = () => {
        setVisible(true)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>
            {
                visible && <Image source={wateringImg} style={styles.image} />
            }
            <Text style={styles.subTitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 38
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        width: 292,
        height: 284
    },
})