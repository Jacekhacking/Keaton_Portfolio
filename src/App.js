import './App.css';
import Nav from "./components/Nav/Nav.js"
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Shopping from "./components/Shopping/Shopping";
import {useState} from "react";

function App() {

    const [page, handlePageChange] = useState()

    const renderPage = () => {
        switch (page) {

            case 'About Me':
                return <AboutMe/>;

            case 'Portfolio' :
                return<Portfolio/>

            case 'Shopping' :
                return <Shopping/>

            default:
                return <LandingPage page ={page} handlePageChange = {handlePageChange} />
        }
    }

  return (
    <div className="App">
      <body className={'flow'}>
      <Nav page ={page} handlePageChange = {handlePageChange} />
      {renderPage(page)}
      </body>
    </div>
  );
}

export default App;
