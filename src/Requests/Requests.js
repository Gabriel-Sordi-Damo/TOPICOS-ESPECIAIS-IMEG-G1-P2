import axios from "axios";


async function MakeRequest(config) {
    let { url, query } = config
    url = url ? url : "https://apiprevmet3.inmet.gov.br/previsao/"
    url += query ? query : ""
    let response = await axios.get(url)
    return response
}



export default MakeRequest