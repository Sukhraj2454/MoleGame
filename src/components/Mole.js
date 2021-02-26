import '../styles/Mole.css'

const Mole = ({css}) =>{

  return (
    <div className="Mole" style={css}>
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
