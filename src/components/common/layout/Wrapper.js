import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Footer from './Footer';

class WrapperComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Header/>
                {this.props.children}
                <Footer/>
            </MuiThemeProvider>
        );
    }
}

export default WrapperComponent;