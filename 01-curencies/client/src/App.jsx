import React, { useState, useEffect } from "react";

import Form from "./compnents/Form";

function App() {
    const [data, setData] = useState({});

    const handleDataUpdate = (data) => {
        setData(data);
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div>
                    <p className="">Converter</p>
                    <Form onDataUpdate={handleDataUpdate} />
                    {data.data ? (
                        <>
                            <p>
                                {data.data.query.amount} {data.data.query.from}{" "}
                                = {data.data.result} {data.data.query.to}
                            </p>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default App;
