import '../styles/Mole.css'
import {useState} from 'react';

const style = [[{animation:'ud 3s infinite'},
              {animation:'fastud 1s infinite'},
              {animation:'ud 1.5s infinite'}],

              [{animation:'ud 1.5s infinite'},
              {animation:'fastud 0.9s infinite'},
              {animation:'ud 0.75s infinite'}]
            ];
var sc=0;
const Mole = ({css, inc}) =>{
  const [ani, setani] = useState(css)
  // const rep = setInterval(()=>{
  
  // }, 3000);

  const onClick = ()=>{
      inc();
      let val = {
          top:css.top,
          left:css.left
        }
        sc++;
      setani(val)
       setTimeout(()=>{
        let val = {
          top:css.top,
          left:css.left,
          animation:style[sc<30?0:1][Math.floor(Math.random()*10)%3].animation
        }
        setani(val)
       }, 2000); 
  }
  return (
    <div className="Mole" style={ani} onClick={()=>{onClick()}}>
        <div className='e1'></div>
        <div className='e2'></div>
        <div className='nose'></div>
        <div className='n1'></div>
        <div className='n2'></div>
        <div className='n3'></div>
        <div className='n4'></div>
        <div className='n5'></div>
        <div className='n6'></div>
        <div className='mouth'></div>
    </div>
  );
}

Mole.defaultProps ={
    pos:{
        top:'35vh'
    },
    anim:{
      animation:'ud 3s infinite'
    }
}

export default Mole;
