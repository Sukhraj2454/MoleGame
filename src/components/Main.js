import Mole from './Mole';
import Hole from './Hole';
import '../styles/Main.css';

const style = [{top:'70vh',left:'15vw',animation:'ud 3s infinite'},
              {top:'70vw',left:'45vw',animation:'fastud 1s infinite'},
              {top:'70vw',left:'75vw',animation:'ud 1s infinite'}
            ];

function Main() {
  return (
    <div>
        <div>
            <Mole id='LMole' css = {style[0]}/>
            <Hole  pos={{top:'65vh',left:'10.5vw'}}/>
            
            <Mole id='LMole' css={style[1]}/>
            <Hole  pos={{top:'65vh',left:'40.5vw'}}/>

            <Mole id='LMole' css={style[2]}/>
            <Hole  pos={{top:'65vh',left:'70.5vw'}}/>
        </div>

        <div id='bot'>
        </div>
    </div>
  );
}

export default Main;
