import React from 'react';
import {render} from 'react-dom';

import PageHeader from './components/text.jsx';

class App extends React.Component {
  render () {
    return <PageHeader />;
  }
}

render(<App/>, document.getElementById('app'));
