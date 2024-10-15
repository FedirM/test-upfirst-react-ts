import { Provider as ReduxProvider } from 'react-redux';
import store from '../../state/store';

import MainMenuComponent from '../../components/menu';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import CardList from '../../components/card-list';

function HomePage() {

    return (
        <ReduxProvider store={store}>
          <div className='container'>
            <div className="menu-wrapper">
                <MainMenuComponent />
            </div>
            <div className="main-aria-wrapper">
              <div className='header-wrapper'>
                <HeaderComponent />
              </div>
              <div className='content-wrapper'>
                <CardList />
              </div>
              <div className='footer-wrapper'>
                <FooterComponent />
              </div>
            </div>
          </div>
        </ReduxProvider>
      );
}

export default HomePage;