import './assets/css/grid.css';
import './assets/css/base.css';
import './assets/css/App.css';
import Main from './features/main/Main';
import Footer from './features/footer/Footer'
import FooterBottom from './features/footer/FooterBottom';

function App() {

  return (
    <div className="App" >

      <div className="main">
        <Main />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
      <FooterBottom />


    </div>
  );
}





export default App;
