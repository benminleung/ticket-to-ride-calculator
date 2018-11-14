import React, { Component } from 'reactn';
import { Route, Link } from 'react-router-dom';
import Version from './containers/Version';
import TopAppBar from './components/TopAppBar';

const routes = [
  {
    path: '/',
    name: 'Home',
    id: 'home',
  },
];

class App extends Component {
  componentDidMount() {}

  render() {
    const { formFields: { versions, fields } } = this.global;
    return (
      <div>
        <TopAppBar />
        <nav>
          <ul>
            {routes.map(route => (
              <li key={`route-link-${route.name}`}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
            {Object.keys(versions).map(version => (
              <li key={`route-link-${version}`}>
                <Link to={versions[version].path}>{versions[version].name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Route path="/" exact render={() => <div>Home</div>}/>
        {Object.keys(versions).map(version => (
          <Route
            key={`route-${version}`}
            path={versions[version].path}
            exact
            render={() => <Version version={versions[version]} fields={fields} />}/>
        ))}
        {/* {Object.keys()versions.map(version => (
          <Route
            key={`route-${version.key()}`}
            path={route.path}
            exact
            render={() => (
              <Version version={route.id} />
            )}/>
        ))} */}
      </div>
    );
  }
}

export default App;
