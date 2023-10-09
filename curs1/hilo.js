const cardTypes = ["clubs", "diamonds", "hearts", "spades"];
let pachet = {
    'clubs': [],
    'diamonds': [],
    'hearts': [],
    'spades': [],
};
let score = 0;


function adaugaCartiInPachet(nrPachet = 1) {
    for( let i = 0; i < cardTypes.length;  i++ ) { // Index cardType
        for( let j = 2; j <= 14; j++ ) {
            pachet[cardTypes[i]].push(j)
        }
    }
    console.log(pachet)
}


function incarcare () {
    // genereaza pachet
    adaugaCartiInPachet();
    // adaugare carte noua
    newCard = schimbaCarte();
    lastCardNumber = newCard;
    // setare scor zero
    seteazaScor();
}

function schimbaCarte() {
    let indexType = Math.floor(Math.random() * 4);
    let cardNumber  = Math.floor(Math.random() * 13 + 2);
    let fileName = "cards/" + cardTypes[indexType] + "_" + cardNumber + ".svg";
    let pozitie  = pachet[cardTypes[indexType]].indexOf(cardNumber);
    if (pozitie == -1){
        console.log("Am obtinut" + fileName + "si nu este in pachet")
        schimbaCarte();
        return;
    }
    pachet[cardTypes[indexType]].splice(pozitie, 1);
    console.log(pachet)
    let imgElement = document.querySelector('#card > img')
    imgElement.setAttribute('src', fileName);
    return cardNumber;
}

function seteazaScor() {
    let divScore = document.getElementById('score');
    let spanScore = divScore.getElementsByTagName('span')[0];
    spanScore.textContent = score;
}

function showFace(happy) {
    const divIdToShow = 'face-' + (happy ? 'happy' : 'sad'); // shorthand if
    const divIdToHide = 'face-' + (!happy ? 'happy' : 'sad');
    document.getElementById(divIdToShow).style.display = 'block';
    document.getElementById(divIdToHide).style.display = 'none';
}

function higher() {
    newCard = schimbaCarte();
    if (typeof newCard !== 'number') return;
    if (newCard >= lastCardNumber) {
        score++;
        seteazaScor();
        showFace(true)
    } else {
        score--;
        seteazaScor();
        showFace(false)
    }
    lastCardNumber = newCard;
}

function lower() {
    newCard = schimbaCarte();
    if (typeof newCard !== 'number') return;
    if (newCard <= lastCardNumber) {
        score++;
        seteazaScor();
        showFace(true)
    } else {
        score--;
        seteazaScor();
        showFace(false)
    }
    lastCardNumber = newCard;
}

document.addEventListener('DOMContentLoaded', incarcare);
