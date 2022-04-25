

import MakeRequest from "../Requests/Requests"
import { useLayoutEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"


export default function Forecast({ geocode }) {

    let [forecasts, setForecasts] = useState({})

    useLayoutEffect(() => {
        GetForecast()
    }, [])

    async function GetForecast() {
        let url = "https://apiprevmet3.inmet.gov.br/previsao/"
        url = url + geocode
        let response = await MakeRequest({ url: url })
        setForecasts(response.data)
    }


    function GetViews() {
        let views = []
        const TODAY = new Date().toLocaleDateString('pt-BR')
        const partsOfTheDay = ["manha", "tarde", "noite"]
        for (const GEO_CODE in forecasts) {
            for (const PART_OF_THE_DAY of partsOfTheDay) {
                let forecast = forecasts[GEO_CODE][TODAY][PART_OF_THE_DAY]
                let view = (
                    <View style={styles.container}>
                        <Text style={styles.linha} >UF: {forecast["uf"]} {forecast["entidade"]}</Text>
                        <Text style={styles.linha} >Período: {PART_OF_THE_DAY}</Text>
                        <Text style={styles.linha} >Temperatura Máxima: {forecast["temp_max"]}</Text>
                        <Text style={styles.linha} >Temperatura Mínima: {forecast["temp_min"]}</Text>
                        <Text style={styles.linha} >Tempo: {forecast["tempo"]}</Text>
                        <Text style={styles.linha} > {forecast["resumo"]} </Text>
                    </View>
                )
                views.push(view)
            }
        }
        return views
    }

    return (
        GetViews()
    )
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