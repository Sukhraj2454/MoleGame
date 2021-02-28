import '../styles/Mole.css'
import {useState} from 'react';

const style = [{animation:'ud 3s infinite'},
              {animation:'fastud 1s infinite'},
              {animation:'ud 1.5s infinite'}
            ];

const Mole = ({css}) =>{
  const [ani, setani] = useState(css)
  const rep = setInterval(()=>{
  let val = {
      top:css.top,
      left:css.left,
      animation:style[Math.floor(Math.random()*10)%3].animation
    }
    setani(val)
  }, 3000);
  const onClick = ()=>{
      let val = {
          top:css.top,
          left:css.left
        }
        setani(val)
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
