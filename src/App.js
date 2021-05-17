import logo from './logo.svg';
import './App.css';
import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <MetaTags>
        {/* <title>Page 1</title> */}
        <meta name="description" content="Some description." />
        <meta property="og:description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="src/images/sumate_a_nuestro_equipo.jpg" />
      </MetaTags>
      {/* <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <meta name="description" content="Helmet application" />
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet> */}
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
    </>
  );
}

export default App;
