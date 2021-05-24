import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Routes = () => {
  const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/services', Component: Services },
    { path: '/contact', Component: Contact },
  ];

  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match !== null}
              timeout={0}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component match={match} />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

const App = withRouter(({ location }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <NavBar />
      <div className="page-content">
        <Routes />
      </div>
      {window.location.pathname !== '/' && <Footer />}
    </>
  );
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
