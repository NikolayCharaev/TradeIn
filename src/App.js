import './scss/style.scss'

import CallNumbers from './components/callNumbers/CallNumbers';
import Header from './components/header/Header';
import Sentence from './components/sentence/Sentence';
import Terms from './components/terms/Terms';
import CompanyServices from './components/companyServices/CompanyServices';
import Guarantees from './components/guarantees/Guarantees';


function App() {
  return (
      <>
        <CallNumbers/>
        <Header/>
        <Sentence/>
        <Terms/>
        <CompanyServices/>
        <Guarantees/>
      </>
  );
}

export default App;
