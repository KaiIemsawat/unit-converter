import { useState } from "react";
import InputForm from "./components/InputForm";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex justify-center h-screen items-center">
                <div>
                    <h1 className="text-red-700">Converter</h1>
                    <InputForm />
                </div>
            </div>
        </>
    );
}

export default App;
