import axios from "axios";
import { useState } from "react";
import CurrrentRow from "./components/CurrrentRow";
import "./App.css";

function App() {
    return (
        <>
            <h1>Converter</h1>
            <CurrrentRow />
            <div className="equals">=</div>
            <CurrrentRow />
        </>
    );
}

export default App;
