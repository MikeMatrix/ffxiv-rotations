import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from 'material-ui/styles';
import HeaderComponent from './HeaderComponent';

import '../_styles/App.scss';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class Header extends React.Component<{}, {}> {
    render() {
        return (
            <MuiThemeProvider muiTheme={lightMuiTheme}>
                <HeaderComponent/>
            </MuiThemeProvider>
        );
    }
}