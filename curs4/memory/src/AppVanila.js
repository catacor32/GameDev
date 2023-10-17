import React, {useState, useEffect} from 'react';
import './App.css';
import Tile from './tile.js';

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5)
}


function App() {
  let [noShown, setNoShown] = useState(0);
  let [objects, setObjects] = useState([]);
  useEffect(() => {
    let objects = ['bear', 'corgi', 'crab', 'fish', 'panda', 'parrot', 'pig',
      'rabbit','rhinoceros', 'shark', 'snail', 'turtle',]
    objects = [...objects, ...objects];
    objects = shuffle(objects);
    setObjects(objects)
  },[])
  
  function incShown() {
    // console.log('yes')
    setNoShown(noShown + 1);
  }



  return (
    <div className="App">
      <div className='grid grid-cols-6 gap-4 m-10'>
        {objects.map(function(object, index){
          return <Tile 
            tile={object} 
            alt={`icon of ${object}`} 
            index={index}
            functieClick={incShown}
            />
        })}
        Shown: {noShown}
      </div>
    </div>
  );
}

export default App;
