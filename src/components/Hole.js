import '../styles/Hole.css'

const Hole = ({pos}) =>{

  return (
    <div className="Hole" style={pos}>
        <div className='h1'></div>
        <div className='h2'></div>
    </div>
  );
}

Hole.defaultProps ={
    pos:{
        top:'40vh',
        left:'45vw'
    }
}

export default Hole;
