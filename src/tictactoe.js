import React from 'react';

import {useState, useEffect} from 'react';

import cross from './images/letter-x.png';
import circle from './images/circle.png';

import useSound from 'use-sound';
import clickSound from './audio/btnClickSound.mp3';
import winSound from './audio/winSound.mp3';

const imageArray = [cross, circle];
const board = ['', '', '', '', '', '', '' ,'', ''];



function TicTacToe(){

	const [currentPlayer, setCurrentPlayer] = useState(0);
	const [winner, setWinner] = useState('');
	const [display, setDisplay] = useState('');

	const [playClickSound] = useSound(clickSound);
	const [playWinSound] = useSound(winSound);

	const playBtns = document.getElementsByClassName('box');

	const togleClick = ({target}) => {

		let index = parseInt(target.value);
		if (board[index] === ''){
			playClickSound();

			if (!currentPlayer){
				board[index] = 'x';
			} else {
				board[index] = 'o';
			}

			target.innerHTML =
			`<img src='${imageArray[currentPlayer]}' width="70%" height="70%" />`;

			if (!currentPlayer){
				setCurrentPlayer(1);
			} else {
				setCurrentPlayer(0);
			}
		}

		console.log(board);	
	}

	const checkWinner = () => {
		setDisplay(`Player ${currentPlayer+1} to play:`)
		if ((board[0] === board[1]) && (board[1] === board[2])){
			if (board[0] === 'x'){
				setWinner(1);

			} else if(board[0] === 'o') {
				setWinner(2);
			}
		}
		if ((board[0] === board[3]) && (board[3] === board[6])){
			if (board[0] === 'x'){
				setWinner(1);

			} else if (board[0] === 'o') {
				setWinner(2);
			}
		}
		if ((board[1] === board[4]) && (board[4] === board[7])) {
			if (board[1] === 'x'){
				setWinner(1);

			} else if (board[1] === 'o'){
				setWinner(2);
			}
		}
		if ((board[2] === board[5]) && (board[5] === board[8])) {
			if (board[2] === 'x'){
				setWinner(1);

			} else if (board[2] === 'o'){
				setWinner(2);
			}
		}
		if ((board[3] === board[4]) && (board[4] === board[5])){
			if (board[3] === 'x'){
				setWinner(1);

			} else if (board[3] === 'o'){
				setWinner(2);
			}
		}
		if ((board[6] === board[7]) && (board[7] === board[8])){
			if (board[6] === 'x'){
				setWinner(1);
			} else if (board[6] === 'o'){
				setWinner(2);
			}
		}
		if ((board[0] === board[4]) && (board[4] === board[8])){
			if (board[0] === 'x'){
				setWinner(1);

			} else if (board[0] === 'o'){
				setWinner(2);
			}
		}
		if ((board[2] === board[4]) && (board[4] === board[6])){
			if (board[2] === 'x'){
				setWinner(1);

			} else if (board[2] === 'o'){
				setWinner(2);
			}
		}
	}

	useEffect(() => {	
		if (typeof winner == 'number'){
			playWinSound();
			setDisplay(`Player ${winner} won!!.`);
			
			for (let k=0; k<playBtns.length; k++){
				playBtns[k].disabled = true;
			}
		}
	}, [winner])

	useEffect(checkWinner, [currentPlayer]);

	const onReset = () =>{
		playClickSound();

		for (const i in board){
			board[i] = '';
		}
		setCurrentPlayer(0);
		setWinner('');

		
		for (let j=0; j< playBtns.length; j++){
			playBtns[j].innerHTML = '';
			playBtns[j].disabled = false;
		}
		setDisplay(`Player 1 to play: `)
	}


	return(
		<div className="mainContainer">
			<h1>Tic Tac Toe</h1>

			<h3 id="disp">{display}</h3>

			<div className="row">
				<button className="box" value='0' onClick={togleClick}>
				
				</button>
				<button className="box" value='1' onClick={togleClick}>
					
				</button>
				<button className="box" value='2' onClick={togleClick}>
					
				</button>
			</div>

			<div className="row">
				<button className="box" value='3' onClick={togleClick}>
					
				</button>
				<button className="box" value='4' onClick={togleClick}>
					
				</button>
				<button className="box" value='5' onClick={togleClick}>
					
				</button>
			</div>

			<div className="row">
				<button className="box" value='6' onClick={togleClick}>
					
				</button>
				<button className="box" value='7' onClick={togleClick}>
					
				</button>
				<button className="box" value='8' onClick={togleClick}>
					
				</button>
			</div>

			<button id="resetBtn" onClick={onReset}><b>Reset</b></button>
		</div>
	);
}

export default TicTacToe;