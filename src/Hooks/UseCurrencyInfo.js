import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())//converting to json
        .then((res) => setData(res[currency]))//storing the converted json data in a usestate nopt using the regular variable coz it will not get updated in the UI 
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;//returning the whole method