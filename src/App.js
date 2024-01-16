import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Nabvar } from './components';


const App = () => {
  return (
    <div className='app'>
    <Nabvar />
    <Header />
    <About/>
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    </div>    
   );
}

export default App;