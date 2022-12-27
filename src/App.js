import Header from './components/Header/Header';
import Layout from './Layout';
import Navigation from './components/Navigation/BottomNavigation/Navigation';
import TopNavigation from './components/Navigation/TopNavigation/TopNavigation';

import { buttonHeader, contactHeader, headerLinks } from './data';

import './styles/main.scss';

function App() {
  return (
    <Layout>
      <Header topNavigation={<TopNavigation contactHeader={contactHeader} />}>
        <Navigation buttonHeader={buttonHeader} headerLinks={headerLinks} />
      </Header>
    </Layout>
  );
}

export default App;
