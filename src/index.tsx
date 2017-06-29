import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import Test from './components/Test';
//import './index.scss';

injectTapEventPlugin();

ReactDOM.render(
  <Test />,
  document.getElementById('header') as HTMLElement
);
registerServiceWorker();
