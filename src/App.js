import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [numberType, setNumberType] = useState('p');
    const [data, setData] = useState(null);

    const fetchNumbers = async () => {
        try {
            const response = await axios.get(http://localhost:5000/numbers/${numberType});
            setData(response.data);
        } catch (error) {
            console.error('Error fetching numbers:', error);
        }
    };

    return (
        <div className="App">
            <h1>Average Calculator</h1>
            <select value={numberType} onChange={(e) => setNumberType(e.target.value)}>
                <option value="p">Prime</option>
                <option value="f">Fibonacci</option>
                <option value="e">Even</option>
                <option value="r">Random</option>
            </select>
            <button onClick={fetchNumbers}>Fetch Numbers</button>
            {data && (
                <div>
                    <h2>Numbers</h2>
                    <p>Before: {data.before.join(', ')}</p>
                    <p>After: {data.after.join(', ')}</p>
                    <p>Average: {data.average}</p>
                </div>
            )}
        </div>
    );
}

export default App;