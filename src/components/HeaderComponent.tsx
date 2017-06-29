import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

const logo = require('../res/logo.svg');
const style = {margin: 15, height: 70};

export default class HeaderComponent extends React.Component {

 /*   constructor(props : number) {
        super(props);
        this.state = {
            value: 3,
        };
    }
    handleChange = (event: string, index: number, value: number) => this.setState({value});
*/
    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <img src={logo} style={style}/>
                </ToolbarGroup>
                <ToolbarGroup>
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