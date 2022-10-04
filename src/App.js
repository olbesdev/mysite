import React, {Fragment} from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {

  const date = new Date().getFullYear()

  return (
    <Fragment>
      <Header 
      titulo='Jonathan Olbes'
      />

      <Footer 
      fecha={date}
      /> 
    </Fragment>
    
  );
}

export default App;
