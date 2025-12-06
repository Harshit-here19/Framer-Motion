import { useState } from 'react';
import './App.css';
import ScrollTriggered from "./component/ScrollTriggered"
import ScrollLinked from './component/ScrollLinked';
import SharedLayoutAnimation from './component/SharedLayoutAnimation';
import StateAnimations from './component/StateAnimations';
import MultipleKeyframes from './component/MultipleKeyframes';
import IOSPointer from './component/IOSPointer';

function App() {
  const [selected, setSelected] = useState('a'); // Default selection

  return (
    <div className="App">

       {/* 👇 Radio Button Group - Styled as Pills */}
        <div className="flex flex-wrap justify-center gap-3 my-8">
          {[
            { id: 'a', label: '📊 Scroll Top-Bar ' },
            { id: 'b', label: '📝 Scroll Triggered' },
            { id: 'c', label: '🎮 Shared Layout Animation' },
            { id: 'd', label: '🚓 State Animation' },
            { id: 'e', label: '🏕 Multiple Keyframes' },
            { id: 'f', label: '🧲 Magnetic Button' },
          ].map((option) => (
            <label
              key={option.id}
              className={`px-6 py-3 rounded-full cursor-pointer transition-all duration-300 font-medium text-sm sm:text-base ${
                selected === option.id
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-102'
              }`}
            >
              <input
                type="radio"
                name="component-selector"
                value={option.id}
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="sr-only" // Visually hidden but accessible
              />
              {option.label}
            </label>
          ))}
        </div>
      
      {selected === 'a' && <ScrollLinked/>}
      {selected === 'b' && <ScrollTriggered />}
      {selected === 'c' && <SharedLayoutAnimation />}
      {selected === 'd' && <StateAnimations />}
      {selected === 'e' && <MultipleKeyframes />}
      {selected === 'f' && <IOSPointer />}
      
    </div>
  );
}

export default App;
