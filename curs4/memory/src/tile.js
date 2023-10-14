import React, {useState} from 'react';

function clickedTile(index, setVisible,tile) {
    console.log('you click index ' + index)
    setVisible('visible')
}

function Tile(props){
    let [invisible, setVisible] = useState('invisible');
    // console.log(props);
    return <div className='tile rounded-md' onClick={() => clickedTile(props.index, setVisible, props.tile)}>
    <img 
        className={`m-auto ${invisible}`}
        src={`https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-${props.tile}.png`}
        alt={props.alt}
        />
  </div>
}

export default Tile;