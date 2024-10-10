
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './state/store';
import { defaultTheme, Provider as SpectrumProvider } from '@adobe/react-spectrum';

import MainMenuComponent from './components/menu';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import CardList from './components/card-list';

function App() {

  return (
    <ReduxProvider store={store}>
      <SpectrumProvider theme={defaultTheme}>
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
            <CardList />
            <div className='test-content'>Content</div>
          </div>
          <div className='footer-wrapper'>
            <FooterComponent />
          </div>
        </div>
      </div>
    </SpectrumProvider>
    </ReduxProvider>
  );
}

export default App;
