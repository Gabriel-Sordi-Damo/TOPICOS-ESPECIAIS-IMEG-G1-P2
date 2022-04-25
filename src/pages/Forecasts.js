

import { useLayoutEffect, useState } from "react";
import Forecast from "../components/Forecast";
import { View, Button } from "react-native";

const PASSO_FUNDO = "PASSO_FUNDO"
const MARAU = "MARAU"
const CARAZINHO = "CARAZINHO"
const SOLEDADE = "SOLEDADE"
const ERECHIM = "ERICHIM"
let geoCodes = {
    PASSO_FUNDO: "4314100",
    MARAU: "4311809",
    CARAZINHO: "4304705",
    SOLEDADE: "4320800",
    ERECHIM: "4307005"

}
export default function Forecasts({ navigation }) {

    let [forecasts, setForecast] = useState([])

    useLayoutEffect(() => {
        getForecast()
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.pop()} title="Voltar" />
            ),
        })
    }, [])

    async function getForecast() {
        let forecasts = []
        for (const city in geoCodes) {
            let forecast = await (<Forecast geocode={geoCodes[city]} />)
            forecasts.push(forecast)
        }
        setForecast(forecasts)
    }

    return (
        <View>
            {forecasts}
        </View>
    )

}

