import './scss/style.scss'

import CallNumbers from './components/callNumbers/CallNumbers';
import Header from './components/header/Header';
import Sentence from './components/sentence/Sentence';
import Terms from './components/terms/Terms';
import CompanyServices from './components/companyServices/CompanyServices';
import Guarantees from './components/guarantees/Guarantees';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';


function App() {
  return (
      <>
        <CallNumbers/>
        <Header/>
        <Sentence/>
        <Terms/>
        <CompanyServices/>
        <Guarantees/>
        <Feedback/>
        <Footer/>
        <Copyright/>
      </>
  );
}

export default App;
