import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

import './Header.scss';

const logo = require('../../res/logo.svg');

export default class Header extends React.Component<object, object> {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <img className="logo" src={logo}/>
                    <ToolbarTitle text="PivotXIV" />
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <IconButton tooltip="Share">
                        <FontIcon className="material-icons">share</FontIcon>
                    </IconButton>
                    <IconButton tooltip="Clear">
                        <FontIcon className="material-icons">clear</FontIcon>
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}