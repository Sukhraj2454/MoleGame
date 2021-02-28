import Mole from './Mole';
import Hole from './Hole';
import '../styles/Main.css';
import {useState} from 'react';

const style = [{top:'70vh',left:'15vw',animation:'ud 3s infinite'},
              {top:'70vw',left:'45vw',animation:'fastud 1s infinite'},
              {top:'70vw',left:'75vw',animation:'ud 1s infinite'}
            ];

function Main() {
  const [score, setScore] = useState(0);
  const incScore = ()=>{
    setScore(score+1);
  }
  return (
    <div>
        <h2>Score:{score}</h2>
        <h4>Click on Head of Mole to Increase Scores.</h4>
        <div>
            <Mole id='LMole' css = {style[0]} inc = {incScore}/>
            <Hole  pos={{top:'65vh',left:'10.5vw'}}/>
            
            <Mole id='LMole' css={style[1]} inc = {incScore}/>
            <Hole  pos={{top:'65vh',left:'40.5vw'}}/>

            <Mole id='LMole' css={style[2]} inc = {incScore}/>
            <Hole  pos={{top:'65vh',left:'70.5vw'}}/>
        </div>

        <div id='bot'>
        </div>
    </div>
  );
}

export default Main;
