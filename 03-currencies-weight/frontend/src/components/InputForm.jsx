import { useState } from "react";
import CURRENCIES from "../symbols/currencySymbols";

const InputForm = () => {
    const [weightIn, setWeightIn] = useState(0);
    const [weightFrom, setWeightFrom] = useState("Kg");
    const [weightTo, setWeightTo] = useState("Lb");

    const weightConverse = (weightIn, weightFrom, weightTo) => {
        if (weightFrom === weightTo) {
            return weightIn;
        } else if (weightFrom === "Kg" && weightTo === "Lb") {
            return weightIn * 2.205;
        } else if (weightFrom === "Lb" && weightTo === "Kg") {
            return weightIn * 0.4536;
        }
    };

    return (
        <form className="">
            <div className="flex flex-row gap-2 items-center">
                <p>Convert currency</p>
                <input
                    className="border rounded-md bg-slate-50 px-4 py-2"
                    type="number"
                    placeholder="from"
                />
                <select className="bg-slate-600 text-stone-200 text-md max-w-[256px] px-2 py-3 rounded-md">
                    {CURRENCIES.map((symbol) => (
                        <option key={symbol.symbol} value={symbol.symbol}>
                            {symbol.symbol}
                        </option>
                    ))}
                </select>
                <p>To</p>
                <select className="bg-slate-600 text-stone-200 text-md max-w-[256px] px-2 py-3 rounded-md">
                    {CURRENCIES.map((symbol) => (
                        <option key={symbol.symbol} value={symbol.symbol}>
                            {symbol.symbol}
                        </option>
                    ))}
                </select>
            </div>
            <div>with</div>
            <div className="flex flex-row gap-2 items-center">
                <p>Weight</p>
                <input
                    className="border rounded-md bg-slate-50 px-4 py-2"
                    type="number"
                    placeholder="from"
                />
                <select className="bg-slate-600 text-stone-200 text-md max-w-[256px] px-2 py-3 rounded-md">
                    <option value="kilogram">Kg</option>
                    <option value="pound">Lb</option>
                </select>
                <p>To</p>
                <select className="bg-slate-600 text-stone-200 text-md max-w-[256px] px-2 py-3 rounded-md">
                    <option value="kilogram">Kg</option>
                    <option value="pound">Lb</option>
                </select>
            </div>
        </form>
    );
};
export default InputForm;
