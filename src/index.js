import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Context from './components/Context';
import Routes from './components/Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import config from './config';

const App = withRouter(({ location }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  const [content, setContent] = useState(undefined);

  useEffect(() => {
    const query = `
      query {
        Home(id: "home") {
          title
          descriptionRaw
        }
        About(id: "about") {
          title
          bioRaw
        }
        Services(id: "services") {
          section1 {
            title
            descriptionRaw
          }
          section2 {
            title
            descriptionRaw
          }
        }
        Faq(id: "faq") {
          questions {
            question
            answerRaw
          }
        }
        Testimonials(id: "testimonials") {
          testimonials {
            quote
            source
          }
        }
        Resources(id: "resources") {
          resources {
            name
            file {
              asset {
                url
              }
            }
          }
        }
        Contact(id: "contact") {
          noteRaw
        }
      }
    `;
    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    };
    fetch(config.apiURL, params)
      .then((res) => res.json())
      .then(({ data }) => {
        setContent(data);
      });
  }, []);

  return (
    <Context.Provider value={{ content }}>
      <NavBar />
      <div className="page-content">
        <Routes />
      </div>
      <Footer />
    </Context.Provider>
  );
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
