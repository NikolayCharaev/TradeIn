import './scss/style.scss'

import CallNumbers from './components/callNumbers/CallNumbers';
import Header from './components/header/Header';
import Sentence from './components/sentence/Sentence';
import Terms from './components/terms/Terms';


function App() {
  return (
      <>
        <CallNumbers/>
        <Header/>
        <Sentence/>
        <Terms/>
      </>
  );
}

export default App;
