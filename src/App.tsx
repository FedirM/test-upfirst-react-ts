
import './App.css';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

import MainMenuComponent from './components/menu';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <div className='container'>
        <div className="menu-wrapper">
            <MainMenuComponent></MainMenuComponent>
        </div>
        <div className="main-aria-wrapper">
          <div className='header-wrapper'>
            <HeaderComponent></HeaderComponent>
          </div>
          <div className='content-wrapper'>
            <h3>Main area</h3>
            <div className='test-content'>Content</div>
          </div>
          <div className='footer-wrapper'>
            <FooterComponent />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
