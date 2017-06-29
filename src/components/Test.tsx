import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
import * as ComponentTest from './ComponentTest';

import '../_styles/App.scss';

const logo = require('../img/logo.png');
const lightMuiTheme = getMuiTheme(lightBaseTheme);


class Test extends React.Component<any, any> {
    render() {
        return (
            <MuiThemeProvider muiTheme={lightMuiTheme}>
                <ComponentTest/>
            </MuiThemeProvider>
        );
    }
}

export default Test;