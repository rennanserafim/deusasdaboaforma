import CircularIntegration from '../../components/CircularIntegration/CircularIntegration';
import { BrowserRouter, Link } from 'react-router-dom';

import './Home.css';
import { Button } from '@mui/material';

function Home() {


  return (

    <div className='fundoTop'>
    <BrowserRouter>
    <CircularIntegration />
    <Link to='/second'>AA</Link>
  </BrowserRouter>
  </div>

  );
}

export default Home;
