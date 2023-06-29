import { useState } from 'react';
import { ComponentSelector } from './components/ComponentSelector';
import './App.css';

function App() {
  const [currentComponent, setCurrentComponent] = useState('none');


  return (
    <>
      <div className='App-header'>
        <h1>Selected Component: {currentComponent} </h1>
        <ComponentSelector
          selectedComponent={ currentComponent }
          onComponentChange={ (component) => setCurrentComponent(component) }
        />
      </div>      
    </>
  )
}

export default App
