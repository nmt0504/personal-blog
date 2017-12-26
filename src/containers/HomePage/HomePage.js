import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});

class HomePage extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title="My AppBar" />
            </MuiThemeProvider>
        );
    }
}

export default HomePage;