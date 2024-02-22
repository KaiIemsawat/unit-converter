import { useEffect, useState } from "react";
import axios from "axios";

import CURRENCIES from "../symbols/currencySymbols";

const Form = ({ onDataUpdate }) => {
    const [convertFrom, setConvertFrom] = useState("EUR");
    const [convertTo, setConvertTo] = useState("USD");
    const [amount, setAmount] = useState(1);
    const [data, setData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
                {
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
                }
            );
            onDataUpdate(response);
            setData(response);
        } catch (error) {
            console.error(error);
        }

        console.log("Convert From:", convertFrom);
        console.log("Convert To:", convertTo);
        console.log("Amount:", amount);
    };

    useEffect(() => {
        console.log("DATA:", data);
    }, [data, onDataUpdate]);

    return (
        <form
            className="flex flex-row gap-2 items-center"
            onSubmit={handleSubmit}
        >
            <input
                className="p-2 border rounded-md bg-slate-50"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select
                className="bg-slate-600 text-stone-200 text-md rounded-md max-w-[256px] px-2 py-3"
                value={convertFrom}
                onChange={(e) => setConvertFrom(e.target.value)}
            >
                {CURRENCIES.map((symbol) => (
                    <option key={symbol.symbol} value={symbol.symbol}>
                        {symbol.symbol}
                    </option>
                ))}
            </select>
            <p className="text-lg">to</p>
            <select
                className="bg-slate-600 text-stone-200 text-md rounded-md max-w-[256px] px-3 py-3"
                value={convertTo}
                onChange={(e) => setConvertTo(e.target.value)}
            >
                {CURRENCIES.map((symbol) => (
                    <option key={symbol.symbol} value={symbol.symbol}>
                        {symbol.symbol}
                    </option>
                ))}
            </select>
            <button
                type="submit"
                className="bg-slate-200 border-slate-600 border text-slate-600 py-3 px-4 rounded-md mx-2"
            >
                Convert
            </button>
        </form>
    );
};
export default Form;
