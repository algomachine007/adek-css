import Header from './components/Header/Header';

import styles from './layout.module.scss';

function App() {
  return (
    <header className={styles.layout}>
      <Header />
    </header>
  );
}

export default App;
