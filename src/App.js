import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import MetaTags from 'react-meta-tags';
import NewPage from './components/NewPage/NewPage';

function App() {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <NewPage />
    </>
  );
}

export default App;
