import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [convertFrom, setConvertFrom] = useState("EUR");
    const [convertTo, setConvertTo] = useState("USD");
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: "GET",
                url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
                params: {
                    from: convertFrom,
                    to: convertTo,
                    amount,
                },
                headers: {
                    "X-RapidAPI-Key":
                        "d8170df1a3msh7787fba2e6d12ecp17db82jsnd33802ecc2b6",
                    "X-RapidAPI-Host":
                        "currency-conversion-and-exchange-rates.p.rapidapi.com",
                },
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return <></>;
}

export default App;
