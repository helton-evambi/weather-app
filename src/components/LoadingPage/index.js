import MoonLoader from 'react-spinners/MoonLoader'

import './style.css';

function LoadingPage() {
  return(
    <div className='loadingPage'>
      <MoonLoader color="#5ca7be" size={150}/>
    </div>
  )
}

export default LoadingPage;