import '../styles/Mole.css'
// import {useState} from 'react';

const Mole = ({pos}) =>{
    // const [posi, setposi] = useState({})

  return (
    <div className="Mole" style={pos}>
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
        top:'40vh',
        left:'45vw'
    }
}

export default Mole;
