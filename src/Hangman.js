import React, {Component} from 'react';
//3
import image0 from './images/0.jpg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
//10 button
import Button from '@mui/material/Button';

//4
import {randomWord} from './words';
//1 class component
class Hangman extends Component{
constructor() {
    super()
    //6 mistake,guessed,answer
    this.state={
        mistake: 0,
        guessed: new Set([]),
        answer: randomWord(),

    };
    //5 maxwrng,store images in array 
    this.MaxWrong=10;
    this.images=[
        image0,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,

    ];
}
//8 guessedword //13 condition to populate the answer
guessedWord=() => {
  return  this.state.answer.split("").map((letter) => this.state.guessed.has(letter) ? letter : " _ ");
}
//11 handleGuess guessed mistake
handleGuess=(guessedLetter)=>{
    this.setState({
        guessed: this.state.guessed.add(guessedLetter),
        mistake: this.state.mistake + (this.state.answer.includes(guessedLetter) ? 0 : 1) 
        
    })
}

//9 generateButton //12 diabled
generateButton=()=>{
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
        <Button variant="text" key={letter} value={letter} onClick={() => this.handleGuess(letter)} disabled={this.state.guessed.has(letter)}>
            {letter}
            </Button>
    ));
}
//2 <h3>Hangman Game</h3> //6 wrong guesses //7 img src populating image in ui //14 game over, isWon
render(){
    //10 gameState //15 answer condition
    var gameState=this.generateButton();
    const gameOver = this.state.mistake >= this.MaxWrong;
    const isWon = this.guessedWord().join("") === this.state.answer;
    if(isWon){
        gameState="You Won!!!"
    }if(gameOver){
        gameState="Better Luck Next Time!!!"
    }
    return(
        <>
        <div align="center">
        <h3>Hangman Game</h3>
        <div>
           Wrong Guesses : {this.state.mistake} of {this.MaxWrong}<br /><br /><br /><br />
           <img src={this.images[this.state.mistake]}/>
           <p>Guess The Programming Language</p>
           <p>{!gameOver? this.guessedWord() : this.state.answer}</p>
           <p style={{ width:"50%" }}>{gameState}</p>
        </div>
        </div>
          
        </>
    )
}
}

export default Hangman;