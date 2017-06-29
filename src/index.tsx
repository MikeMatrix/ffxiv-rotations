import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
 import './index.scss';

ReactDOM.render(
  <Header />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
