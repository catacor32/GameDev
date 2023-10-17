import React from 'react';
import './App.css';
import Tile from './tile.js';

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5)
}


class App extends React.Component {

  state = {
    objects: [],
    noShown: 0,
  }

  constructor(){
    super();
    console.log('constructor appComponent');
    this.oldIndex = -1;
    this.shown = [];
  }

  componentDidMount(){
    console.log('Mount')
    let objects = ['bear', 'corgi', 'crab', 'fish', 'panda', 'parrot', 'pig',
      'rabbit','rhinoceros', 'shark', 'snail', 'turtle',]
    objects = [...objects, ...objects];
    objects = shuffle(objects);
    for(let i = 0; i < objects.length; i++){
      this.shown[i] = 0;
    }
    this.setState(
      {
        objects: objects,
      }
    )
  }
  
  incShown(index) {
    this.setState(
      {
        noShown: this.state.noShown + 1,
      }
    )
    if(this.state.noShown === 2){
      if(this.oldIndex === -1){
        
      }else if(this.objects[this.oldIndex] === this.objects[index]){
        console.log('Tilesuri egale');
        this.oldIndex = -1;
      }else{
        setTimeout(() => {
          this.render();
        },2000)
      }
    }
    console.log(index)
  }


  
  render(){
    return (
      <div className="App">
        <div className='grid grid-cols-6 gap-4 m-10'>
          {this.state.objects.map((object, index) =>{
            return <Tile 
              tile={object} 
              alt={`icon of ${object}`} 
              index={index}
              functieClick={() => this.incShown(index)}
              shown={this.shown[index]}
              />
          })}
          Shown: {this.state.noShown}
        </div>
      </div>
    );
  }
}

export default App;