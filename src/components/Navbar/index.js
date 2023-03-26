
import { useContext } from 'react';
import { TempUnitContext } from '../../contexts/tempUnitContext';
import './style.css';

function Navbar() {
  const { unit, setUnity } = useContext(TempUnitContext)
  const tempActive = 'btnBlack', tempDesable = 'btnWhite'
  return (
    <nav className="navbar">
      <div className="left">
        <button className='btnLeft'>Today</button>
        <button className='btnRight'>Week</button>
      </div>
      <div className="right">
        <button
          className={unit === 'temp_c' ? tempActive : tempDesable}
          onClick={() => setUnity('temp_c')}><sup>o</sup>C
        </button>
        <button
          className={unit === 'temp_f' ? tempActive : tempDesable}
          onClick={() => setUnity('temp_f')}><sup>o</sup>F
        </button>
        <div className="logo">
          <img
            src='https://www.nicepng.com/png/detail/7-77391_businessman-transparent-business-man-png.png'
            alt='logo' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;