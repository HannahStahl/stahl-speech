import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './Home';
import About from './About';
import Services from './Services';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Resources from './Resources';
import Contact from './Contact';

const Routes = () => {
  const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/services', Component: Services },
    { path: '/faq', Component: FAQ },
    { path: '/testimonials', Component: Testimonials },
    { path: '/resources', Component: Resources },
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

export default Routes;
