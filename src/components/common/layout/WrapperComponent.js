import React from 'react';
import Header from './Header';
import TopHeader from './TopHeader';
import Footer from './Footer';

class WrapperComponent extends React.Component {
    render() {
        return (
            <div>
                <TopHeader/>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default WrapperComponent;