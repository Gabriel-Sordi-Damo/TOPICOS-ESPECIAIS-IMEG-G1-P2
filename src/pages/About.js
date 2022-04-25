import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useLayoutEffect } from 'react'

export default function About({ navigation }) {

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.pop()} title="Voltar" />
            ),
        })

    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.linha}> Nome: Gabriel Sordi Damo</Text>
            <a href="https://www.linkedin.com/in/gabriel-sordi-damo-676ab5218/" >Linkeding</a>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5

    }, linha: {
        flexDirection: "row"
    }
});