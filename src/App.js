import Header from './components/Header/Header';
import Layout from './Layout';
import { buttonHeader, contactHeader, headerLinks } from './data';

import './styles/main.scss';

function App() {
  return (
    <Layout>
      <Header
        buttonHeader={buttonHeader}
        contactHeader={contactHeader}
        headerLinks={headerLinks}
      />
    </Layout>
  );
}

export default App;
