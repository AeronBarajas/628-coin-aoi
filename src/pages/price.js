import React, {useState, useEffect} from "react"
const Price = (props) => {
    const apiKey = "A2339057-30FF-40FB-BE35-9438F54F5F64"
    const symbol = props.match.params.symbol
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    const [coin, setCoin] = useState(null)
    const getCoin = async () => {
        const response = await fetch(url);
        const data = await response.json()
        setCoin(data)
    }
    useEffect(() => {
        getCoin()
    }, [])
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }
    const loading = () => {
        return <h1>Loading... </h1>
    }
    return coin ? loaded() : loading()
}
export default Price