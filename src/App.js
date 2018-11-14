import React, { Component } from 'reactn';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Version from './containers/Version';
import AppBarDrawerMenu from './components/AppBarDrawerMenu';

const routes = {
  home: {
    path: '/',
    name: 'Home',
  },
};

class App extends Component {
  componentDidMount() {}

  render() {
    const {
      formFields: { versions, fields },
    } = this.global;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBarDrawerMenu versions={versions} routes={routes}>
          <Route path="/" exact render={() => <div>Home</div>} />
          {Object.keys(versions).map(version => (
            <Route
              key={`route-${version}`}
              path={versions[version].path}
              exact
              render={() => <Version version={versions[version]} fields={fields} />}/>
          ))}
        </AppBarDrawerMenu>

        {/* {Object.keys()versions.map(version => (
          <Route
            key={`route-${version.key()}`}
            path={route.path}
            exact
            render={() => (
              <Version version={route.id} />
            )}/>
        ))} */}
      </React.Fragment>
    );
  }
}

export default App;
