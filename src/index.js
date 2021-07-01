import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Context from './components/Context';
import Routes from './components/Routes';
import NavBar from './components/NavBar';
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
            subsection1 {
              title
              descriptionRaw
            }
            subsection2 {
              title
              descriptionRaw
            }
          }
          section3 {
            title
            descriptionRaw
          }
        }
        Faq(id: "faq") {
          title
          questions {
            question
            answerRaw
          }
        }
        Testimonials(id: "testimonials") {
          title
          testimonials {
            quote
            source
          }
        }
        Resources(id: "resources") {
          title
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
          title
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
      <Routes />
    </Context.Provider>
  );
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
