import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBaseTheme, MuiThemeProvider } from 'material-ui/styles';

import App from './App';
import './index.scss';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
