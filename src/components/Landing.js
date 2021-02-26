import '../styles/Landing.css'
import { NavLink } from 'react-router-dom';
function Landing() {
  return (
    <div className="Landing">
      <h1>WHAC-A-MOLE</h1>
      <NavLink to='/Start'><h2>START</h2></NavLink>
    </div>
  );
}

export default Landing;
