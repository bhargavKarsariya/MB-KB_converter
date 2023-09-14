import React, { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('bytes');
  const [outputValue, setOutputValue] = useState(0);
  const [outputUnit, setOutputUnit] = useState('kilobytes');

  const units = ['bytes', 'kilobytes', 'megabytes', 'gigabytes', 'terabytes', 'petabytes', 'bits', 'kilobits', 'megabits', 'gigabits', 'terabits', 'petabits'];

  useEffect(() => {
    const convertData = () => {
      const input = parseFloat(inputValue );   

      if (!isNaN(input)) {
        const byteConversion = {
          bytes: 1,
          kilobytes: 1024,
          megabytes: 1024 * 1024,
          gigabytes: 1024 * 1024 * 1024,
          terabytes: 1024 * 1024 * 1024 * 1024,
          petabytes: 1024 * 1024 * 1024 * 1024 * 1024,
          bits: 8,
          kilobits: 8 * 1024,
          megabits: 8 * 1024 * 1024,
          gigabits: 8 * 1024 * 1024 * 1024,
          terabits: 8 * 1024 * 1024 * 1024 * 1024,
          petabits: 8 * 1024 * 1024 * 1024 * 1024 * 1024,
        };
      
        const result = (input / byteConversion[inputUnit]) * byteConversion[outputUnit];
        setOutputValue(result); 
      } else {
        setOutputValue('');
      }
    };
    
    convertData();
  }, [inputValue, inputUnit, outputUnit]);

  return (
    <div className="App">
      <h1>Converter</h1>
      <div>
        <input style={{margin:"10px"}}
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="text" value={outputValue} readOnly style={{margin:"10px"}} />
        <br/>
        <select style={{margin:"10px",width:"10%" }}
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
            {unit}
            </option>
          ))}
        </select>
        <select style={{margin:"10px",width:"10%" }}
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;