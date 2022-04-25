
import { StyleSheet, View, Text, Button } from "react-native"


export default function Menu({ navigation }) {



    return (
        <View style={styles.container}>
            <Button
                style={styles.linha}
                title={"Previsões"}
                onPress={() => navigation.push("Forecasts")}
            />
            <Button
                style={styles.linha}
                title={"Sobre"}
                onPress={() => navigation.push("About")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 10,
        gap: 15

    }, linha: {
        flexDirection: "row",
    }
});