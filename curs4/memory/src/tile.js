import React, {useState} from 'react';

function clickedTile(index, setVisible, functieClick) {
    console.log('you click index ' + index);
    setVisible('visible');
    functieClick();
}

function Tile(props){
    let [invisible, setVisible] = useState(props.shown === 1 ? 'visible' : 'invisible');
    // console.log(props);
    return <div className='tile rounded-md' onClick={(event) => clickedTile(props.index, setVisible, props.functieClick)}>
    <img 
        className={`m-auto ${invisible}`}
        src={`https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-${props.tile}.png`}
        alt={props.alt}
        />
        {props.shown}
  </div>
}

export default Tile;